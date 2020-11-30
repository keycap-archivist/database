const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1tRhoMKBVZuBxE9UAynqtBNrm__OEjQnOF07NIUamQtE', {
  name: 'Sway Caps',
  instagram: 'https://www.instagram.com/sway.caps/',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
