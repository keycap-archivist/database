const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1Ruol_1a4kzgLyXkeQ4d7ayu2shpsJPrHVUu7dBIYOYQ',
  {
    name: 'Craftkey',
    instagram: 'https://www.instagram.com/craftkey/',
    website: 'https://www.craftkeyartisan.com/',
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
