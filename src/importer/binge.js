const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1UGadEUhjZ-wyVywIb1-Qwpd32jPkobNaYisQTuJG-wQ',
  {
    name: 'Hunger Work Studio',
    instagram: 'https://www.instagram.com/hungerworkstudio/',
    website: 'https://hungerwork.studio/',
  },
  ['pop'],
);

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
