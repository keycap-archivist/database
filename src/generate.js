const PromisePool = require('@mixmaxhq/promise-pool')
const _ = require('lodash')
const fs = require('fs')
const { stringify } = require('csv-stringify/sync')
const path = require('path')
const { scrapFrom } = require('./scraper/gdoc')
const { flatten } = require('./utils')
const deepmerge = require('@fastify/deepmerge')({ all: true })

const DEST = path.resolve(path.join(__dirname, '..', 'db'))
const DESTINATION_JSON = path.join(DEST, 'catalog.json')
const DESTINATION_CSV = path.join(DEST, 'catalog.csv')
const customImporterPath = path.resolve(path.join(__dirname, 'importer', 'custom'))
const jsonImporterPath = path.resolve(path.join(__dirname, 'importer', 'json'))

async function moduleScrap (catalog, moduleName, isTest = false) {
  const m = require(moduleName)
  const moduleCatalog = await m.scrap()

  if (isTest) {
    if (moduleCatalog.hasError) {
      throw new Error(`${moduleCatalog.name} failed. ${moduleCatalog.error}`)
    }
    return
  }
  const formattedName = `${moduleCatalog.name.toLowerCase().replace(/[ .]/g, '-')}.json`
  const destFile = path.join(DEST, formattedName)
  if (moduleCatalog.hasError !== true) {
    catalog.push(moduleCatalog)
    fs.writeFileSync(destFile, JSON.stringify(moduleCatalog, null, ' '))
  } else {
    // using the previous version of the file
    console.warn(`ERRORS: ${formattedName}`)
    console.warn(moduleCatalog.error)
    catalog.push(JSON.parse(fs.readFileSync(destFile, 'utf-8')))
  }
}

async function jsonScrap (catalog, filename, isTest = false) {
  const data = JSON.parse(fs.readFileSync(filename, { encoding: 'utf8' }))

  const docsToParse = Array.isArray(data.docId) ? data.docId : [data.docId]
  let outputCatalog = {}
  for (const doc of docsToParse) {
    const scrapFunc = scrapFrom(doc, data, data.tabsOperations)
    const moduleCatalog = await scrapFunc()
    outputCatalog = deepmerge(outputCatalog, moduleCatalog)
  }
  if (isTest) {
    if (outputCatalog.hasError) {
      throw new Error(`${outputCatalog.name} failed. ${outputCatalog.error}`)
    }
    return
  }
  const formattedName = `${outputCatalog.name.toLowerCase().replace(/[ .]/g, '-')}.json`
  const destFile = path.join(DEST, formattedName)

  if (docsToParse.length > 1) {
    const sculptGrp = _.groupBy(outputCatalog.sculpts, 'id')

    const sculpts = []
    for (const sculptId in sculptGrp) {
      const sculpt = _.findLast(sculptGrp[sculptId])
      sculpt.colorways = _.flattenDeep(sculptGrp[sculptId].map(s => s.colorways))
      sculpts.push(sculpt)
    }

    outputCatalog.sculpts = sculpts
  }

  if (outputCatalog.hasError !== true) {
    catalog.push(outputCatalog)
    fs.writeFileSync(destFile, JSON.stringify(outputCatalog, null, ' '))
  } else {
    // using the previous version of the file
    console.warn(`ERRORS: ${formattedName}`)
    console.warn(outputCatalog.error)
    catalog.push(JSON.parse(fs.readFileSync(destFile, 'utf-8')))
  }
}

function report (catalog) {
  let colorwayCount = 0
  let sculptCount = 0
  const srcTab = []
  console.log('')
  console.log('Artisan DB Generation')
  console.log('---------------------')
  console.log('')
  for (const a of catalog) {
    srcTab.push(`| ${a.id} | ${a.name} | [link](${a.src}) |`)
    console.log('')
    console.log(`- ${a.name}`)
    sculptCount += a.sculpts.filter((x) => x !== null).length
    for (const s of a.sculpts.filter((x) => x !== null)) {
      console.log(`---- ${s.name} : ${s.colorways.length} colorways`)
      colorwayCount += s.colorways.length
    }
  }
  console.log('')
  console.log('-----------------')
  console.log(`Artists   : ${catalog.length}`)
  console.log(`Sculpts   : ${sculptCount}`)
  console.log(`Colorways : ${colorwayCount}`)

  let tpl = fs.readFileSync(path.join(__dirname, '..', 'templates', 'README.md'), 'utf-8')
  tpl = tpl
    .replace('<artistCount>', catalog.length)
    .replace('<sculptCount>', sculptCount)
    .replace('<colorwayCount>', colorwayCount)
    .replace('<srcCatalogs>', srcTab.join('\n'))
  fs.writeFileSync(path.join(__dirname, '..', 'README.md'), tpl)
}

async function generate (isTest = false, targetCat = undefined) {
  let catalog = []
  const pool = new PromisePool({ numConcurrent: 2 })
  const customScraps = fs.readdirSync(customImporterPath)
  const jsonScraps = fs.readdirSync(jsonImporterPath)
  const total = customScraps.length + jsonScraps.length
  let idx = 1
  for (const s of customScraps) {
    if (targetCat && !path.join(customImporterPath, s).endsWith(targetCat)) {
      continue
    }
    await pool.start(
      async (cat, filename) => {
        await moduleScrap(cat, path.join(customImporterPath, filename), isTest)
        console.log(`${idx++}/${total}`)
      },
      catalog,
      s
    )
  }
  for (const s of jsonScraps) {
    if (targetCat && !path.join(jsonImporterPath, s).endsWith(targetCat)) {
      continue
    }
    await pool.start(
      async (cat, filename) => {
        await jsonScrap(cat, path.join(jsonImporterPath, filename), isTest)
        console.log(`${idx++}/${total}`)
      },
      catalog,
      s
    )
  }
  const errors = await pool.flush()
  if (errors.length) {
    console.log('Database has not been properly generated')
    console.log('ERRORS:')
    console.log(errors)
    throw new Error('Error during DB generation')
  }
  // Just Testing the generation
  // no need to got further
  if (isTest) {
    return
  }
  catalog = catalog.sort((a, b) => {
    const textA = a.name.toUpperCase()
    const textB = b.name.toUpperCase()
    return textA < textB ? -1 : textA > textB ? 1 : 0
  })
  const flattennedCatalog = flatten(catalog)
  fs.writeFileSync(DESTINATION_JSON, JSON.stringify(catalog))
  fs.writeFileSync(DESTINATION_CSV, stringify(flattennedCatalog.full, { header: true }))
  for (const a in flattennedCatalog.artist) {
    fs.writeFileSync(
      path.join(DEST, `${flattennedCatalog.artist[a][0].artist.toLowerCase().replace(/[ .]/g, '-')}.csv`),
      stringify(flattennedCatalog.artist[a], { header: true })
    )
  }
  report(catalog)
}

if (require.main === module) {
  const args = process.argv.slice(2)
  const isTest = args.length && args[0] === 'test'
  const cat = args.length && args.length > 1 ? args[1] : undefined
  generate(isTest, cat)
    .then(() => {
      console.log('Generation finished')
    })
    .catch((e) => {
      console.log('An error has occured')
      console.error(e)
      process.exit(1)
    })
}
