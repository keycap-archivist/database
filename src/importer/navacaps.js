const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1YP-CG6HSuG04dWwG-PUyql0_sBwmae_3q3ukr5N8nJM';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Navacaps'),
    name: 'Navacaps',
    instagram: 'https://www.instagram.com/navacaps/',
    website: '',
    discord: '',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('navacaps.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
