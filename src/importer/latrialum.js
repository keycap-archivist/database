const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1crfV15xlpsIIfDxo0PGoEE40ZZfMUkl4JOZO_d1sILY',
  {
    name: 'Latrialum',
    instagram: 'https://www.instagram.com/latrialum/',
    discord: 'https://discord.com/invite/latrialum',
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
