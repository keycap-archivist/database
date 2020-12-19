const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1CzwP-Zj8cLVvMdQRJqDFL_kiZOaOHAcgp3F0owh4-nY',
  {
    name: 'Tech. Stoned. Amish.',
    instagram: 'https://www.instagram.com/techstonedamish/',
  },
  [],
);

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
