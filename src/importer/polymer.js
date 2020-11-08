const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('16FowOOELHP9DmQ7rKdVmgvvEGEgiOhwDtxAA58IDJCg', {
  name: 'Polymer Salon',
  instagram: 'https://www.instagram.com/fendentkeys/',
  website: 'https://geekhack.org/index.php?topic=85461.0',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
