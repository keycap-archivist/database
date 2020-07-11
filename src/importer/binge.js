const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('../utils');

const GDOC_ID = '1UGadEUhjZ-wyVywIb1-Qwpd32jPkobNaYisQTuJG-wQ';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Hunger Work Studio'),
    name: 'Hunger Work Studio',
    instagram: 'https://www.instagram.com/hungerworkstudio/',
    website: 'https://hungerwork.studio/',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('binge.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
