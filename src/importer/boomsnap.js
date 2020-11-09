const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1Uj-JdFhGKaEhKw7-O3HGzzrNctD1c4a8zwC6lezk9nQ',
  {
    id: 'BoomSnap! Caps',
    name: 'BoomSnap Caps',
    instagram: 'https://www.instagram.com/boomsnapcaps/',
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
