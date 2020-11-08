const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1ibnukzm73aRIkBm83OhmPsT6wdyA1GH3MRQ6FPBkOSA',
  {
    name: 'BrewCaps',
    instagram: 'https://www.instagram.com/brew_caps/',
    website: 'https://brewcaps.store/',
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
