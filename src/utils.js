const { exec } = require('child_process')
const { google } = require('googleapis')
const fs = require('fs')
const path = require('path')
const { crc32 } = require('crc')
const { decode } = require('he')
const sharp = require('sharp')
const { readFile } = require('fs/promises')

function debug (...args) {
  if (process.env.KA_DEBUG === '1') {
    console.debug(...args)
  }
}

function launcher (scrap) {
  // if the caller is in the importer means that we are debugging
  // it with command like `node src/importer/foo.js`
  if (path.dirname(require.main.filename).endsWith('importer')) {
    debug('Calling launcher')
    const filename = path.basename(require.main.filename)
    scrap().then((catalog) => {
      const f = `${path.basename(filename, path.extname(filename))}.json`
      fs.writeFileSync(f, JSON.stringify(catalog))
      console.log(`${f} generated`)
    })
  }
}

const attributes = Object.freeze({
  selfOrdered: 'ka_self_order',
  cover: 'ka_cover',
  profile: {
    sculpted: 'ka_profile_sculpt',
    blank: 'ka_profile_blank'
  },
  design: {
    physical: 'ka_design_physical',
    digital: 'ka_design_digital',
    hybrid: 'ka_design_hybrid'
  },
  cast: {
    resin: 'ka_cast_resin',
    mixed: 'ka_cast_mixed'
  }
})

function genId (input) {
  return crc32(input).toString(16)
}

async function downloadFile (fileId) {
  const gApiKey = process.env.G_API_KEY

  if (!gApiKey) {
    throw new Error('No Google API KEY provided. Quitting. Use G_API_KEY env var')
  }

  const d = google.drive({
    version: 'v3',
    auth: process.env.G_API_KEY
  })
  return d.files
    .export({
      fileId,
      mimeType: 'text/html'
    })
    .then((res) => res.data)
}

function isSelfOrdered (index) {
  const re = new RegExp(`\\(${attributes.selfOrdered}\\)`, 'gim')
  return re.test(index)
}

function getNationality (index) {
  const re = /\(ka_from_(\w{2})\)/gim
  const m = re.exec(index)
  if (!m) {
    return undefined
  }
  return m[1]
}

function getAttributes (_txt) {
  const txt = _txt.toLowerCase()
  const out = {}
  if (txt.indexOf(`(${attributes.profile.sculpted})`) !== -1) {
    out.profile = 'sculpted'
  }
  if (txt.indexOf(`(${attributes.profile.blank})`) !== -1) {
    out.profile = 'blank'
  }
  if (txt.indexOf(`(${attributes.design.physical})`) !== -1) {
    out.design = 'physical'
  }
  if (txt.indexOf(`(${attributes.design.digital})`) !== -1) {
    out.design = 'digital'
  }
  if (txt.indexOf(`(${attributes.design.hybrid})`) !== -1) {
    out.design = 'hybrid'
  }
  if (txt.indexOf(`(${attributes.cast.resin})`) !== -1) {
    out.cast = 'resin'
  }
  if (txt.indexOf(`(${attributes.cast.mixed})`) !== -1) {
    out.cast = 'mixed'
  }
  return out
}

function gDriveParse (catalog, tabs) {
  let currentSculpt
  let sculptDate
  let currIdx = -1
  let currentAttributes = {}
  for (let idx = 0; idx < tabs.length; idx += 1) {
    const element = tabs[idx]
    if (idx % 2 === 0) {
      let sculptName
      sculptDate = undefined
      // In case of bad formats
      try {
        const { rawText } = element
        currentAttributes = getAttributes(rawText)
        sculptName = element.querySelector('span').childNodes[0].rawText

        /**
         * Support date formats
         * DD MMM YYYY, MMM YYYY, YYYY
         * DD MMMM YYYY, MMMM YYYY, YYYY
         */
        const regDate = /\(((\d{2})*[a-zA-Z ]*\d{4})\)/gim
        // Look for the release arg in all the spans in the title table
        const s = element.querySelectorAll('span').find((x) => regDate.test(x.rawText))
        if (s) {
          regDate.lastIndex = 0
          // decode and replace to have only to handle regular double quotes ""
          const str = decode(s.rawText).replace(/(”|“)/g, '"')
          const dateMatch = regDate.exec(str)
          if (dateMatch) {
            // eslint-disable-next-line prefer-destructuring
            sculptDate = dateMatch[1]
            sculptName = sculptName.replace(regDate, '')
          }
        }
      } catch (e) {
        // eslint-disable-next-line no-continue
        continue
      }
      sculptName = decode(sculptName).trim()
      if (sculptName !== currentSculpt) {
        currentSculpt = sculptName
        currIdx += 1
      }
    } else {
      let imgIdx = 0
      // eslint-disable-next-line no-loop-func
      element.querySelectorAll('td').forEach((e) => {
        let img = ''
        if (e.querySelector('img')) {
          img = e.querySelector('img').rawAttributes.src
        }
        if (img !== '') {
          // delete end argument of google image render
          const detect = /(.*)=s\d+$/
          const matches = img.match(detect)
          if (matches && matches.length) {
            // eslint-disable-next-line prefer-destructuring
            img = matches[1]
          }
          if (!catalog.sculpts[currIdx]) {
            // eslint-disable-next-line no-param-reassign
            catalog.sculpts[currIdx] = {
              id: genId(`${catalog.name}-${currentSculpt}`),
              name: currentSculpt,
              releaseDate: sculptDate,
              colorways: [],
              ...currentAttributes
            }
            // console.log(catalog.sculpts[currIdx]);
          }
          let { text } = e
          text = text.replace(/(”|“)/g, '"')
          let isCover = false
          const reCover = new RegExp(`\\(${attributes.cover}\\)`, 'gim')
          if (reCover.test(text)) {
            isCover = true
            text = text.replace(reCover, '')
          }

          const regDate = /\(([a-zA-Z ]*\d{4})\)/gim
          const dateMatch = regDate.exec(text)

          const regCount = /\(count (\d+)\)/gim
          const countMatch = regCount.exec(text)

          const regComm = /\(\*\)/gim
          const commMatch = regComm.exec(text)

          const regGiveaway = /\(giveaway\)|\(give-away\)/gim
          const giveawayMatch = regGiveaway.exec(text)

          const regPhotoCredit = /\(pc .*\)|\(photocredit .*\)/gim
          const photoCreditMatch = regPhotoCredit.exec(text)

          let releaseDate
          let totalCount
          let commissioned
          let giveaway
          let photoCredit

          if (dateMatch) {
            // eslint-disable-next-line prefer-destructuring
            releaseDate = dateMatch[1]
            text = text.replace(regDate, '')
          }
          if (countMatch) {
            // eslint-disable-next-line prefer-destructuring
            totalCount = countMatch[1]
            text = text.replace(regCount, '')
          }
          if (commMatch) {
            commissioned = true
            text = text.replace(regComm, '')
          }
          if (giveawayMatch) {
            giveaway = true
            text = text.replace(regGiveaway, '')
          }
          if (photoCreditMatch) {
            photoCredit = photoCredit[1]
            text = text.replace(regPhotoCredit, '')
          }
          const sanitizedName = decode(text).trim()
          catalog.sculpts[currIdx].colorways.push({
            name: sanitizedName,
            img,
            id: genId(`${catalog.name}-${currentSculpt}-${sanitizedName}-${imgIdx++}`),
            isCover,
            releaseDate,
            totalCount,
            commissioned,
            giveaway,
            photoCredit,
            note: ''
          })
        }
      })
    }
  }
  debug(catalog.sculpts.map((x) => x.name))
  // eslint-disable-next-line no-param-reassign
  catalog.sculpts = catalog.sculpts.filter((x) => x)
  return catalog
}

function gDocUrl (id) {
  return `https://docs.google.com/document/d/${id}`
}

function sortBy (list, attr) {
  return list.sort((a, b) => {
    if (a[attr] < b[attr]) return -1
    if (a[attr] > b[attr]) return 1
    return 0
  })
}

async function resize (filepath, type = 'full', _buffer = undefined) {
  let buff
  if (_buffer) {
    buff = _buffer
  } else {
    buff = await readFile(filepath)
  }
  const s = sharp(buff)
  const options = { withoutEnlargement: true, fit: sharp.fit.inside }

  switch (type) {
    case 'full':
      s.resize(720, 720, options).jpeg({ progressive: true, quality: 90, force: true })
      break
    case 'thumb':
      s.resize(250, 250, options).jpeg({ progressive: true, quality: 75, force: true })
      break
    default:
      throw new Error('Unknown type')
  }

  return s.toBuffer().catch((e) => {
    console.log(`Unable to resize ${filepath}`)
    console.log(e)
    throw e
  })
}

function flatten (catalog) {
  const arr = []
  const outArtist = {}
  for (const artist in Object.keys(catalog).sort()) {
    const artistArr = []
    for (const sculpt in catalog[artist].sculpts) {
      catalog[artist].sculpts[sculpt].colorways.forEach((s) => {
        const out = {
          id: s.id,
          artist: catalog[artist].name,
          sculpt: catalog[artist].sculpts[sculpt].name,
          name: s.name,
          img: `https://cdn.keycap-archivist.com/keycaps/${s.id}.jpg`
        }
        arr.push(out)
        artistArr.push(out)
      })
      outArtist[artist] = artistArr
    }
  }
  return { full: arr, artist: outArtist }
}

async function promExec (cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout) => {
      if (err) { return reject(err) }
      console.log(stdout)
      resolve(stdout)
    })
  })
}

module.exports = {
  downloadFile,
  gDriveParse,
  genId,
  gDocUrl,
  isSelfOrdered,
  getNationality,
  attributes,
  getAttributes,
  sortBy,
  launcher,
  resize,
  flatten,
  promExec
}
