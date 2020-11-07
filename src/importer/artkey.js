const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1piD-uC3eAwy0dkqxnsZoYr_-AnezmelpFnHfuK3RslM';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Artkey'),
    name: 'Artkey',
    instagram: 'https://www.instagram.com/artkey.universe/',
    website: 'https://artkeyuniverse.com/',
    discord: 'https://discord.com/invite/DwAzEpt',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('artkey.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
