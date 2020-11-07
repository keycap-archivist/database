const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1SOtOKEBn8oUXnECK0_9-sJ5YBh6BijlbKB6CZsNEBbc';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Glyco Caps'),
    name: 'Glyco Caps',
    instagram: 'https://www.instagram.com/glycocaps/',
    website: '',
    discord: '',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('glyco.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
