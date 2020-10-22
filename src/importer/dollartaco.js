const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1iAaGXFW6zqBa8lx6sKyQmKTvtiDA1zEiAM4jR4zd-Bs';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Dollartacos'),
    name: 'Dollartacos',
    instagram: 'https://www.instagram.com/dollarta.co/',
    website: 'https://www.dollarta.co',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('dollartaco.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
