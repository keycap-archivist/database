const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1crfV15xlpsIIfDxo0PGoEE40ZZfMUkl4JOZO_d1sILY';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Latrialum'),
    name: 'Latrialum',
    instagram: 'https://www.instagram.com/latrialum/',
    website: '',
    discord: 'https://discord.com/invite/latrialum',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop();
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('latrialum.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
