const fs = require('fs')
const path = require('path')
const axios = require('axios')

const dumpFolder = path.join(__dirname, '..', 'dump')

async function dumpCatalog (catalog, targetFolder) {
  for (const s of catalog.sculpts) {
    for (const c of s.colorways) {
      console.log(`download ${c.id}.jpg`)
      const r = await axios({
        method: 'GET',
        url: `https://cdn.keycap-archivist.com/keycaps/${c.id}.jpg`,
        responseType: 'arraybuffer'
      })
      fs.writeFileSync(path.join(targetFolder, `${c.id}.jpg`), r.data)
      console.log(`written ${c.id}.jpg`)
    }
  }
}
if (require.main === module) {
  const args = process.argv.slice(2)
  const catalog = args[0]
  if (!catalog) {
    throw new Error('No argument')
  }
  const jsonCatalog = JSON.parse(fs.readFileSync(catalog))
  if (!fs.existsSync(dumpFolder)) {
    fs.mkdirSync(dumpFolder)
  }
  const outputFolder = path.join(dumpFolder, path.parse(catalog).name)
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder)
  }
  dumpCatalog(jsonCatalog, outputFolder)
}
