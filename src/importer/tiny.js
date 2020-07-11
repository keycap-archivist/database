const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('../utils');

const GDOC_ID = '17Zb-LmujFdcnOZ2_VFhoPHKP1gZJmzEKJH2fawFeqpk';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('TinyMakesThings'),
    name: 'TinyMakesThings',
    instagram: 'https://www.instagram.com/tinymakesthings/',
    website: 'https://www.tinymakesthings.com/',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('tiny.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
