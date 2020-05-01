const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('./utils');

const GDOC_ID = '1656SEjL_uolfVYeUgiAjbelyM_HhxAg77oTCPWiviD8';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('KBK-KWK'),
    name: 'KBK-KWK',
    instagram: '',
    website: 'https://geekhack.org/index.php?topic=55490.0',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('kbk.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
