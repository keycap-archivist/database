const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('./utils');

const GDOC_ID = '1SLiSnTXJXR6X5jT5VnmAe4e3K2yFgZosxBUY1kQQKwo';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);

  let tabs = rootNode.querySelectorAll('table');
  // remove this the betrayer because format is not standard
  // for now
  tabs[32 * 2] = null;
  tabs = tabs.filter((x) => x !== null);
  tabs.pop();
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Bro Caps'),
    name: 'Bro Caps',
    instagram: 'https://www.instagram.com/bro_caps/',
    website: '',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('bro.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
