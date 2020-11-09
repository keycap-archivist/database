const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('17xkdiEkCjV-4bRoLg5FgXGxlPDX1NPLCZjWIasnFaeY', {
  name: 'Rathcaps',
  instagram: 'https://www.instagram.com/rathcaps/',
  discord: 'https://discord.com/invite/fnVPZpX',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
