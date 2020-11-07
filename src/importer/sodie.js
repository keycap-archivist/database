const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1R2dHjC3M2dab4_pMVnc-ti11gazoD42Lqknjm5EW2R0';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('SodieCaps'),
    name: 'SodieCaps',
    instagram: 'https://www.instagram.com/sodiecaps/',
    website: 'http://sodiecaps.com/',
    discord: 'https://discord.com/invite/K6vGuvY',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('sodie.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
