const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1Y1Ip37QbnjNNiOYEAvbv9KVz9A74DFEufDDF22F1OvA', {
  name: 'Deathcaps',
  instagram: 'https://www.instagram.com/death_caps/',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
