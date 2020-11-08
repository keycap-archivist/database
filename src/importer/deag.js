const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1SsLhATHPRDOSAiywL5ktrGAuZbW9swCOd2cBGuUds3E';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('DeagCaps'),
    name: 'DeagCaps',
    instagram: 'https://www.instagram.com/deagcaps/',
    website: '',
    discord: 'https://discord.com/invite/B4zub6jC3S',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('deagcaps.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
