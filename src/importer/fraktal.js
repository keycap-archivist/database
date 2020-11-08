const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '13LmVzCkuN7uGhair0QXq1sJkI7LK6jBs-uhnVU-hDII',
  {
    name: 'Fraktal Kaps',
    instagram: 'https://www.instagram.com/fraktal.kaps/',
    website: 'https://fraktalkaps.com/',
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
