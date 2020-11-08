const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '11EAZ-nVLgIKuRXEXQDQ1SJotvq871jPLMo9HlS3eAZg';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Binirias'),
    name: 'Binirias',
    instagram: 'https://www.instagram.com/binirias/',
    website: '',
    discord: 'https://discord.com/invite/QbWBydq3k2',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('binirias.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
