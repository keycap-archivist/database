const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1tzm7_NLV5XdM2tuM2naiZhDjMMygstN2XneBU_GWbeY', {
  name: 'Dreadkeys',
  instagram: 'https://www.instagram.com/dreadkeys/',
  discord: 'https://discord.gg/KDFs857bnA',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
