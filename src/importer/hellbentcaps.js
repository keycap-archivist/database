const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('15NNk_ttTXCBCHTzyEE3_EigOHPYnc1M5fVGRZJIt0AA', {
  name: 'Hellbent Caps',
  instagram: 'https://www.instagram.com/hellbentcaps/',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
