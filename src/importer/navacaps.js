const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1YP-CG6HSuG04dWwG-PUyql0_sBwmae_3q3ukr5N8nJM',
  {
    name: 'Navacaps',
    instagram: 'https://www.instagram.com/navacaps/',
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
