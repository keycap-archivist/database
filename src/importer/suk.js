const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '17XHW8yaMXVS5i82lOrjXIF7Q68NwCg6w9B6BiEn7A1k';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Suited Up Keycaps'),
    name: 'Suited Up Keycaps',
    instagram: 'https://www.instagram.com/suitedupsuitedup/',
    website: 'https://suitedupkeycaps.com/',
    discord: '',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('suk.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
