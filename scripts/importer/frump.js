const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl } = require('./utils');

const GDOC_ID = '15arZPVtJHvLxrF20l_Oc-cZCwZrwtMI_SyiD2KDsvWg';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Frumpzkeys'),
    name: 'Frumpzkeys',
    instagram: 'https://www.instagram.com/frumpzkeys/',
    website: 'https://www.frumpzkeys.com/',
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('Frumpzkeys.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
