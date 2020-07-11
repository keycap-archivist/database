const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('../utils');

const GDOC_ID = '1qoQ7zBUrkCvfu-xMHcCvxObflfy8z8fWJnkMBJcdp_w';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('GTB'),
    name: 'GTB',
    instagram: 'https://www.instagram.com/glenntheblack/',
    website: 'https://gtblabs.com/',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('gtb.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
