const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1QjFV7yp4Ez8k51qPo2fx_2sXVH9l7SdbI3_sy_E7R_o';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('KeyCravings'),
    name: 'KeyCravings',
    instagram: 'https://www.instagram.com/keycravings/',
    website: 'https://keycravings.com',
    discord: 'https://discord.com/invite/GJdKu6r',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('keycravings.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
