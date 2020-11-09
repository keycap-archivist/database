const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1ENp3M-HymI9LsJRloDGuo3o9s-FXHzFj6hWazGfXSEQ',
  {
    name: 'DCcaps',
    instagram: 'https://www.instagram.com/dccaps/',
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
