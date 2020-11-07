const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1d-CVHj9vA0l-qQjYOFws6Wh9YPLSpCfFCwGDsmDLoJA';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('KeyForge'),
    name: 'KeyForge',
    instagram: 'https://www.instagram.com/keyforge/',
    website: 'https://www.keyforge.com/',
    discord: '',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('keyforge.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
