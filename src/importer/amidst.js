const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '11BeNsND5cMw_NMfGhQfeitg4oFJGNbT4aJ9C_8_iB60';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Amidst The Clouds'),
    name: 'Amidst The Clouds',
    instagram: 'https://www.instagram.com/amidst.the.clouds/',
    website: '',
    discord: '',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('amidst.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
