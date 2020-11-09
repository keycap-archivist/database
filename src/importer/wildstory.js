const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1745lR0WbiVE9-loe1n4evgd6cPE07yAysP-nZxF2ji0', {
  name: 'Wildstory Caps',
  instagram: 'https://www.instagram.com/wildstory.caps/',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
