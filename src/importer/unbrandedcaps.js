const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1nQIdjUjkWGyGAIgiEl2oXANX2MJj91uFhCPKOLx2qWw';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Unbranded.caps'),
    name: 'Unbranded.caps',
    instagram: 'https://www.instagram.com/unbranded.caps/',
    website: '',
    discord: 'https://discord.com/invite/24hy8BA',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('unbrandedcaps.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
