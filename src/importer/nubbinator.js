const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('../utils');

const GDOC_ID = '1sjsPqvqcjt3Wm3MDomwffYVQYjn_g3SDQX-7G1bNN0U';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Nubbinator'),
    name: 'Nubbinator',
    instagram: '',
    website: 'https://geekhack.org/index.php?topic=52829.0',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('nubbinator.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
