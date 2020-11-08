const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1piD-uC3eAwy0dkqxnsZoYr_-AnezmelpFnHfuK3RslM', {
  name: 'Artkey',
  instagram: 'https://www.instagram.com/artkey.universe/',
  website: 'https://artkeyuniverse.com/',
  discord: 'https://discord.com/invite/DwAzEpt',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
