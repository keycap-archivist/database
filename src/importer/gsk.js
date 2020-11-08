const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1rCP_Nn_PQeMiqsFlJ2_8TvFHFPsTpq90-QPgDBo7H40',
  {
    name: 'Goldenstar Keycap',
    instagram: 'https://www.instagram.com/goldenstar_keycap/',
    website: 'https://goldenstarkeycaps.com/',
    discord: 'https://discord.com/invite/JcpnAjw',
  },
  ['shift'],
);

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
