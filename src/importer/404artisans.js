const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1Xjq3VloGrpGE9gmEcbdGhaX_NB0O5eqv7xg_PgVgHX0',
  {
    name: '404Artisans',
    instagram: 'https://www.instagram.com/404artisans/',
    discord: 'https://discord.com/invite/RGPyMJ9',
  },
  ['pop'],
);

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
