const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1phPDeQ05dFkGzaXeVZzCjv-E8c58xh6skD0cR_koE1k';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('BladeMX'),
    name: 'BladeMX',
    instagram: 'https://instagram.com/blade.mxS',
    website: '',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('blademx.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
