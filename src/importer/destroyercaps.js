const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1Me6mlm7YPdH0v5nkCQBZrGJ555gT2RAXwLzC_g4cdIg',
  {
    name: 'Destroyer Caps',
    instagram: 'https://www.instagram.com/destroyer_caps/',
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
