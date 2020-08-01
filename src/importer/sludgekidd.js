const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1NDxNP0oKZOGW_13FrXevtgagTYmgHTGn66V7MYf7sx0';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Sludgekidd'),
    name: 'Sludgekidd',
    instagram: 'https://www.instagram.com/sludgekidd/',
    website: 'https://www.sludgekidd.design/',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('sludgekidd.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
