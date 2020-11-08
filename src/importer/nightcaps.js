const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1GpFn7f6xb2hF0REHKe4ts2wUeHR5CLX8yUMAqSlGW0k',
  {
    name: 'Nightcaps',
    instagram: 'https://www.instagram.com/nightcaps.keycaps/',
    website: 'https://geekhack.org/index.php?topic=79513.0',
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
