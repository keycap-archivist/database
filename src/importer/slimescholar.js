const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('14jF0ewtoj5S2GPXkGrfppH3zu0Dd2Y8aZnJ_nP1kPuw', {
  name: 'Slime Scholar',
  instagram: 'https://www.instagram.com/slimescholarcaps/',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
