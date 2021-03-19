const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

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

launcher(scrap);

module.exports = {
  scrap,
};
