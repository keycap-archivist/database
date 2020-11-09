const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1d-CVHj9vA0l-qQjYOFws6Wh9YPLSpCfFCwGDsmDLoJA', {
  name: 'KeyForge',
  instagram: 'https://www.instagram.com/keyforge/',
  website: 'https://www.keyforge.com/',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
