const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('../utils');

const GDOC_ID = '1Rhig59IdZh5IZ3JP3R_FjZncRxo2M5tfPiUyxJBuLq8';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('C.Y.O Keycaps'),
    name: 'C.Y.O Keycaps',
    instagram: 'https://www.instagram.com/ttylerdurden/',
    website: '',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('cyo.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
