const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('./utils');

const GDOC_ID = '1A8WdP-pS82xPQuxw98EuOyfmAncqlPLmLtzS2uujfWg';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Archetype'),
    name: 'Archetype',
    instagram: 'https://www.instagram.com/archetype_mk/',
    website: '',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('Archetype.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
