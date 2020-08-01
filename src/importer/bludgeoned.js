const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1KKMT4uvPquXcrWF1dX3p3R-PJ_0A98oUO2kwkNvLOd8';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // deleting last tab as it's credits
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Bludgeoned Kaps'),
    name: 'Bludgeoned Kaps',
    instagram: 'https://www.instagram.com/blud_kaps/',
    website: 'https://www.bludkaps.com/',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('bludgeoned.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
