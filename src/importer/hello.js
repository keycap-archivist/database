const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1r_RNJJW5uagd8SL47-c_b_lvb2TuxBsqU6zJhFzs2Vk';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Hello Caps'),
    name: 'Hello Caps',
    instagram: 'https://www.instagram.com/hello__caps/',
    website: '',
    discord: 'https://discord.com/invite/T2pDdk9',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop();
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('hello.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
