const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '17XHW8yaMXVS5i82lOrjXIF7Q68NwCg6w9B6BiEn7A1k',
  {
    name: 'Suited Up Keycaps',
    instagram: 'https://www.instagram.com/suitedupsuitedup/',
    website: 'https://suitedupkeycaps.com/',
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
