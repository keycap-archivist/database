const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1656SEjL_uolfVYeUgiAjbelyM_HhxAg77oTCPWiviD8';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index.replace('', ''));
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('KBK-KWK'),
    name: 'KBK-KWK',
    instagram: '',
    website: 'https://geekhack.org/index.php?topic=55490.0',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  gDriveParse(catalog, tabs);
  console.log(catalog);
  try {
    catalog.sculpts.find((x) => x.name === 'Vandal').colorways.find((x) => x.id === '46f4d447').name =
      'Proto Purle - "Kevin"';
  } catch (e) {
    console.log(e);
  }
  return catalog;
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('kbk.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
