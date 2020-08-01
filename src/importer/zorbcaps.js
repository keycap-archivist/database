const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1_wtEVliorr29dTkO7NHHBkM3fu80V_rU6eJKMVwd8qQ';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Zorbcaps'),
    name: 'Zorbcaps',
    instagram: 'https://www.instagram.com/zorbcaps/',
    website: 'https://www.zorbcaps.com/',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('zorbcaps.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
