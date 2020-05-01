const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('./utils');

const GDOC_ID = '1Am4m-dKazjz-seHmf6E-Y-EgZm2-tRG6fZCtAMPNuKw';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Zorbcaps'),
    name: 'Zorbcaps',
    instagram: 'https://www.instagram.com/zorbcaps/',
    website: 'https://www.zorbcaps.com/',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('zorbcaps.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
