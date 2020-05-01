const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('./utils');

const GDOC_ID = '18QS_4zYR3rFtGLLV1fPZCce5vc6i8_3kauY36xUtTdk';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Booper-Omniclectic'),
    name: 'Booper-Omniclectic',
    instagram: 'https://www.instagram.com/omniclectic/',
    website: 'https://geekhack.org/index.php?topic=76134.0',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('boop.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
