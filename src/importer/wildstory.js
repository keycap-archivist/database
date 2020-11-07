const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1745lR0WbiVE9-loe1n4evgd6cPE07yAysP-nZxF2ji0';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Wildstory Caps'),
    name: 'Wildstory Caps',
    instagram: 'https://www.instagram.com/wildstory.caps/',
    website: '',
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
    fs.writeFileSync('wildstory.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
