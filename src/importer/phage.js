const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1m7S6LaNaAg7vfZP9Bt23EYX7v3boC3TpTaqF0gBsEaM', {
  name: 'Phage Caps',
  instagram: 'https://www.instagram.com/phage.caps/',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
