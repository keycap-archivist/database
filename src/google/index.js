const docs = require('@googleapis/docs')
const path = require('path')
const jp = require('jsonpath')
const { genId, getAttributes, attributes, getNationality, isSelfOrdered } = require('../utils')
const _ = require('lodash')

// get the credential client with the proper scopes
async function getCredentials () {
  const auth = new docs.auth.GoogleAuth({
    keyFilename: path.join(__dirname, '..', '..', 'key.json'),
    scopes: ['https://www.googleapis.com/auth/documents']
  })
  return auth.getClient()
}

// download the json google Doc representation
async function downloadJsonDoc (id, credentials) {
  const client = docs.docs({ version: 'v1', auth: credentials })
  return client.documents.get({ documentId: id })
}

// get the google doc image URI from the kixId within the jsonDoc
function getImgUrl (kixId, jsonDoc) {
  const inlineObjectNode = jsonDoc.data.inlineObjects[kixId]
  return inlineObjectNode.inlineObjectProperties.embeddedObject.imageProperties.contentUri
}

// parse the jsonDocument and hydrate the catalog object
function gDocParse (catalog, jsonDoc) {
  catalog.selfOrder = false
  catalog.nationality = undefined

  jp.query(jsonDoc.data.body.content, '$..textRun').forEach(x => {
    const nat = getNationality(x.content)
    if (nat) { catalog.nationality = nat }
    if (isSelfOrdered(x.content)) { catalog.selfOrder = true }
  })

  // parse all the tables
  const tables = jp.query(jsonDoc, '$.data.body.content..table')
  for (let i = 0; i < tables.length; i++) {
    const odd = !!(i % 2)
    // odd == colorway table
    // even == sculpt title table
    if (odd) {
      const colorwayCells = jp.query(tables[i], '$..tableCells')
      const flattenedCells = _.flatten(colorwayCells)
      const currentSculptObj = catalog.sculpts[catalog.sculpts.length - 1]
      for (const cell of flattenedCells) {
        const imgId = jp.query(cell, '$..inlineObjectId')
        if (!imgId.length) { continue }
        const contentNodes = _.flatten(jp.query(cell, '$..content'))
        let cellString = contentNodes.map(x => {
          if (typeof x !== 'string') { return undefined }
          return x.trim()
        }).filter(Boolean).join(' ')
        let isCover = false
        const reCover = new RegExp(`\\(${attributes.cover}\\)`, 'gim')
        if (reCover.test(cellString)) {
          isCover = true
          cellString = cellString.replace(reCover, '')
        }

        const regDate = /\(([a-zA-Z ]*\d{4})\)/gim
        const dateMatch = regDate.exec(cellString)

        const regCount = /\(count (\d+)\)/gim
        const countMatch = regCount.exec(cellString)

        const regComm = /\(\*\)/gim
        const commMatch = regComm.exec(cellString)

        const regGiveaway = /\(giveaway\)|\(give-away\)/gim
        const giveawayMatch = regGiveaway.exec(cellString)

        const regPhotoCredit = /\(pc (.*)\)/gim
        const photoCreditMatch = regPhotoCredit.exec(cellString)

        let releaseDate
        let totalCount
        let commissioned
        let giveaway
        let photoCredit

        if (dateMatch) {
          // eslint-disable-next-line prefer-destructuring
          releaseDate = dateMatch[1]
          cellString = cellString.replace(regDate, '')
        }
        if (countMatch) {
          // eslint-disable-next-line prefer-destructuring
          totalCount = countMatch[1]
          cellString = cellString.replace(regCount, '')
        }
        if (commMatch) {
          commissioned = true
          cellString = cellString.replace(regComm, '')
        }
        if (giveawayMatch) {
          giveaway = true
          cellString = cellString.replace(regGiveaway, '')
        }

        if (photoCreditMatch) {
          photoCredit = photoCreditMatch[1]
          cellString = cellString.replace(regPhotoCredit, '')
        }

        const sanitizedName = cellString.trim()
        const imgKixId = imgId[0]
        catalog.sculpts[catalog.sculpts.length - 1].colorways.push(
          {
            id: genId(`${catalog.name}-${currentSculptObj.rawname}-${sanitizedName}-${imgKixId}`),
            img: getImgUrl(imgKixId, jsonDoc),
            name: sanitizedName,
            isCover,
            releaseDate,
            totalCount,
            commissioned,
            giveaway,
            photoCredit,
            note: ''
          }
        )
      }
    } else {
      const contentSculpt = jp.query(tables[i], '$..textRun..content')
      if (contentSculpt.length !== 0) {
        const s = contentSculpt[0].trim()
        const fullContentSculpt = contentSculpt.join(' ')
        let sculptName = s
        let sculptDate
        /**
         * Support date formats
         * DD MMM YYYY, MMM YYYY, YYYY
         * DD MMMM YYYY, MMMM YYYY, YYYY
        */
        const regDate = /\(((\d{2})*[a-zA-Z ]*\d{4})\)/gim
        if (regDate.test(s)) {
          regDate.lastIndex = 0
          const dateMatch = regDate.exec(s)
          if (dateMatch) {
            // eslint-disable-next-line prefer-destructuring
            sculptDate = dateMatch[1]
            sculptName = sculptName.replace(regDate, '')
          }
        }
        const attributes = getAttributes(fullContentSculpt)
        catalog.sculpts.push({
          id: genId(`${catalog.name}-${s}`),
          rawname: s, // rawname is used because of the migration and we don't want to break ids again
          name: sculptName.trim(),
          releaseDate: sculptDate,
          colorways: [],
          ...attributes
        })
      } else {
        break
      }
    }
  }
  catalog.sculpts = catalog.sculpts.map(x => {
    delete x.rawname
    return x
  }).filter(x => x.colorways.length)
  return catalog
}

module.exports = {
  getCredentials,
  downloadJsonDoc,
  gDocParse
}
