const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1Xjq3VloGrpGE9gmEcbdGhaX_NB0O5eqv7xg_PgVgHX0';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('404Artisans'),
    name: '404Artisans',
    instagram: 'https://www.instagram.com/404artisans/',
    website: '',
    discord: 'https://discord.com/invite/RGPyMJ9',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('404artisans.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
