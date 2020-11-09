const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1OB-qI-3izrbmWZG08Qi-ihNaCRRB_qmvivs0KCEWpAk', {
  name: 'YoungsterHarris',
  instagram: 'https://www.instagram.com/youngsterharris/',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
