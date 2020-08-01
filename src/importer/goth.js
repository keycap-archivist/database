const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '17YdYcvKifysUDk6mt750Jgq7Zke2kSi66kfqc9BE6RQ';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Gothcaps'),
    name: 'Gothcaps',
    instagram: 'https://www.instagram.com/gothcaps/',
    website: '',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('Gothcaps.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
