const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '18mc8abYoFIYDEqpvJzG5qYLXoQBTBUu9DUp7JSmIFxM';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Lividity'),
    name: 'Lividity',
    instagram: 'https://www.instagram.com/lividitycaps/',
    website: '',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('lividity.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
