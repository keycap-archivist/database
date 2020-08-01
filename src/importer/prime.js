const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1EwmD8ej34LImbIWi9hw_5Tsk7GAGZBhoVMJwIFG_Ad8';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop();
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('PrimeCap'),
    name: 'PrimeCap',
    instagram: 'https://www.instagram.com/prime_caps/',
    website: 'https://primecaps.ca/',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('prime.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
