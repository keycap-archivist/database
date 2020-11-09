const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1eHoHMjOIaZv57h3XgOfamgWaE4nfMbFKLj827XNKSac',
  {
    name: 'Backward Caps',
    instagram: 'https://www.instagram.com/backward.caps.sales/',
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
