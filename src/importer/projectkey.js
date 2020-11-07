const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1UGwGloN5Cf6w_goJB6FX3FcDiB8EsCjHLLB4r17T3OE';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('ProjectKey'),
    name: 'ProjectKey',
    instagram: 'https://www.instagram.com/projectkey.hk',
    website: '',
    discord: '',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('projectkey.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
