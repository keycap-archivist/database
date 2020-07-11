const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('../utils');

const GDOC_ID = '1eHoHMjOIaZv57h3XgOfamgWaE4nfMbFKLj827XNKSac';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop();
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Backward Caps'),
    name: 'Backward Caps',
    instagram: 'https://www.instagram.com/backward.caps.sales/',
    website: '',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('backward.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
