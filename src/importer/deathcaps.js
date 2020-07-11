const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('../utils');

const GDOC_ID = '1Y1Ip37QbnjNNiOYEAvbv9KVz9A74DFEufDDF22F1OvA';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Deathcaps'),
    name: 'Deathcaps',
    instagram: 'https://www.instagram.com/death_caps/',
    website: '',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('deathcaps.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
