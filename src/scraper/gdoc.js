const { genId, gDocUrl } = require('../utils')
const { gDocParse, getCredentials, downloadJsonDoc } = require('../google')

function scrapFrom (gdocID, pMeta = {}, tabsOperations = []) {
  const meta = { ...pMeta }
  delete meta.docId
  delete meta.tabsOperations

  if (gdocID === undefined) {
    throw new Error('Missing GoogleDoc identifier')
  }
  if (meta.name === undefined) {
    throw new Error(`Missing name in metadata for "${gdocID}"`)
  }

  return async function scrap () {
    try {
      const creds = await getCredentials()
      const jsonDoc = await downloadJsonDoc(gdocID, creds)
      const catalog = {
        src: gDocUrl(gdocID),
        id: '',
        name: '',
        instagram: '',
        website: '',
        discord: '',
        sculpts: [],
        ...meta
      }
      catalog.id = genId(meta.id || meta.name)
      return gDocParse(catalog, jsonDoc)
    } catch (e) {
      return {
        hasError: true,
        error: e,
        name: meta.name
      }
    }
  }
}

module.exports = {
  scrapFrom
}
