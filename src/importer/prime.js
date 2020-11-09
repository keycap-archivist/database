const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1EwmD8ej34LImbIWi9hw_5Tsk7GAGZBhoVMJwIFG_Ad8',
  {
    name: 'PrimeCaps',
    instagram: 'https://www.instagram.com/prime_caps/',
    website: 'https://primecaps.ca/',
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
