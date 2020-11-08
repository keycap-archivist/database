const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '11BeNsND5cMw_NMfGhQfeitg4oFJGNbT4aJ9C_8_iB60',
  {
    name: 'Amidst The Clouds',
    instagram: 'https://www.instagram.com/amidst.the.clouds/',
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
