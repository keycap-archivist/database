const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '14EBfRe0AxEbCok856_HrL6teQAlkeQL3kpa3z8lenTc';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('CozCaps'),
    name: 'CozCaps',
    instagram: 'https://www.instagram.com/cozkeycaps/',
    website: 'https://www.cozcaps.com/',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('coz.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
