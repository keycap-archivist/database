const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('./utils');

const GDOC_ID = '1ktd-Pim71LVVEG-jUlBayzbbJtkXInPMPxxwGIx_H4c';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('CYSM'),
    name: 'CYSM',
    instagram: 'https://www.instagram.com/cysm_caps/',
    website: '',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('CYSM.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
