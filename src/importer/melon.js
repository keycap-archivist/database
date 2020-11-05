const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1ceCQ48nyCfZ2u0jnzgnvVW0nuxd01a0QS48cx_TVh-U';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('MelonKeys'),
    name: 'MelonKeys',
    instagram: 'https://www.instagram.com/melonkeys.keycaps',
    website: 'https://www.melonkeys.com',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('melon.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
