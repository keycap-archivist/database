const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('../utils');

const GDOC_ID = '1yyLznWKS7QTrOLTTfP9izvDIlEE_q9n0To1Id3N_0FQ';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('LazyCaps'),
    name: 'LazyCaps',
    instagram: 'https://www.instagram.com/lazycaps/',
    website: '',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('lazycaps.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
