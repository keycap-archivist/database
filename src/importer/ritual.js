const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1ou0Nk0lPbYXwOHdAOOI9UgbIQHwzd7l3XidY9WK9E7w';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // deleting last tab as it's credits
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Ritual Master'),
    name: 'Ritual Master',
    instagram: 'https://www.instagram.com/ritualmaster/',
    website: 'https://www.ritual-master.com/',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('ritual.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
