const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1ibnukzm73aRIkBm83OhmPsT6wdyA1GH3MRQ6FPBkOSA';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('BrewCaps'),
    name: 'BrewCaps',
    instagram: 'https://www.instagram.com/brew_caps/',
    website: 'https://brewcaps.store/',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('brew.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
