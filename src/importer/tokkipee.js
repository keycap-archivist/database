const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1kZoXY-9rV25G5cSwgQxAHwmcjVXNL_LUj8vxhmYYk7k';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Tokkipee'),
    name: 'Tokkipee',
    instagram: 'https://www.instagram.com/tokkipee/',
    website: 'https://tokkipee.carrd.co/',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('Tokkipee.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
