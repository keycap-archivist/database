const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('../utils');

const GDOC_ID = '1Uj-JdFhGKaEhKw7-O3HGzzrNctD1c4a8zwC6lezk9nQ';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('BoomSnap! Caps'),
    name: 'BoomSnap Caps',
    instagram: 'https://www.instagram.com/boomsnapcaps/',
    website: '',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('boomsnap.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
