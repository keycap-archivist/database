const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1OB-qI-3izrbmWZG08Qi-ihNaCRRB_qmvivs0KCEWpAk';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('YoungsterHarris'),
    name: 'YoungsterHarris',
    instagram: 'https://www.instagram.com/youngsterharris/',
    website: '',
    discord: '',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('youngster.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
