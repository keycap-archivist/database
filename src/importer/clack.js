const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('../utils');

const GDOC_ID = '1C9I7PaXFtpNzI8Zb_6ZTjHLMrQ8ERyWn_IvMD8mVoq0';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Clack Factory'),
    name: 'Clack Factory',
    instagram: '',
    website: 'https://wiki.geekhack.org/index.php?title=Clack_Factory',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('clack.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
