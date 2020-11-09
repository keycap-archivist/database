const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1NDxNP0oKZOGW_13FrXevtgagTYmgHTGn66V7MYf7sx0', {
  name: 'Sludgekidd',
  instagram: 'https://www.instagram.com/sludgekidd/',
  website: 'https://www.sludgekidd.design/',
  discord: 'https://discord.com/invite/CbwFfCk',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
