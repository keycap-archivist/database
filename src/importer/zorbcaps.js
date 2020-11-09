const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1_wtEVliorr29dTkO7NHHBkM3fu80V_rU6eJKMVwd8qQ',
  {
    name: 'Zorbcaps',
    instagram: 'https://www.instagram.com/zorbcaps/',
    website: 'https://www.zorbcaps.com/',
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
