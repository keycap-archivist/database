const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

function scrapFrom(gdocID, meta = {}, tabsOperations = []) {
  if (gdocID === undefined) {
    throw new Error('Missing GoogleDoc identifier');
  }
  if (meta.name === undefined) {
    throw new Error(`Missing name in metadata for "${gdocID}"`);
  }
  return async function scrap() {
    try {
      const index = await downloadFile(gdocID);
      const rootNode = htmlparser.parse(index);
      const tabs = rootNode.querySelectorAll('table');
      tabsOperations.forEach((tabOperation) => {
        if (typeof tabOperation === 'function') {
          tabOperation(tabs);
        } else if (typeof tabOperation === 'string' && Array.prototype[tabOperation]) {
          Array.prototype[tabOperation].call(tabs);
        }
      });
      const catalog = {
        src: gDocUrl(gdocID),
        id: '',
        name: '',
        instagram: '',
        website: '',
        discord: '',
        selfOrder: isSelfOrdered(index),
        sculpts: [],
        ...meta,
      };
      catalog.id = genId(meta.id || meta.name);
      return gDriveParse(catalog, tabs);
    } catch (e) {
      return {
        hasError: true,
        error: e,
        name: meta.name,
      };
    }
  };
}

module.exports = {
  scrapFrom,
};
