const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1tY7twR6E65afan23BediwbxwvsjJqXtleE949r5mNeg';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Simulacra'),
    name: 'Simulacra Caps',
    instagram: 'https://www.instagram.com/simulacra_caps/',
    website: '',
    discord: '',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('simulacra.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
