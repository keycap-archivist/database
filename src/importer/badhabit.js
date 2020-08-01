const fs = require('fs');
const htmlparser = require('node-html-parser');
const { downloadFile, genId, gDriveParse, gDocUrl, isSelfOrdered } = require('../utils');

const GDOC_ID = '1MUoyBLW1slC819V1IdDa2eAV5adU2IHGa5YjmFY5w88';

async function scrap() {
  const index = await downloadFile(GDOC_ID);
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll('table');
  tabs.pop(); // credit
  const catalog = {
    src: gDocUrl(GDOC_ID),
    id: genId('Bad Habit Caps'),
    name: 'Bad Habit Caps',
    instagram: 'https://www.instagram.com/bad.habit.caps/',
    website: '',
    selfOrder: isSelfOrdered(index),
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('badhabit.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
