const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1KINOK9cUUA28pSGnHc8ZI-RM36o12ADojXp7ZeNdTh4', {
  name: 'RADcaps',
  instagram: 'https://www.instagram.com/radcaps_/',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
