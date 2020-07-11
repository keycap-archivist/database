const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('../utils');

const GDOC_ID = '19r0FNbI7cLrjogfDviC7WT2HkuRax9RmPZwn3B_DNOY';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('trmk'),
    name: 'trmk',
    instagram: 'https://www.instagram.com/trmkcaps/',
    website: 'https://geekhack.org/index.php?topic=101348.msg2780216#msg2780216',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('trmk.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
