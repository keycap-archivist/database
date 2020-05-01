const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('./utils');

const GDOC_ID = '1_9U5dSSCKeSQcBIhbHPigUs7jiF0AqNI0MYo5KNtpJ8';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Level caps'),
    name: 'Level caps',
    instagram: 'https://www.instagram.com/level.caps/',
    website: '',
    sculpts: [],
  };
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop();
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('level.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
