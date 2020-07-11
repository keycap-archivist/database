const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('../utils');

const GDOC_ID = '1AdPXkALzPErnyMQZrWDJ6o-jCvFB34XeZyz00FDDvLY';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // deleting last tab as it's credits
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Grimey as Fuck'),
    name: 'Grimey as Fuck',
    instagram: 'https://www.instagram.com/gaf_caps/',
    website: '',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('gaf.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
