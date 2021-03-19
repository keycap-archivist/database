const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1Xjq3VloGrpGE9gmEcbdGhaX_NB0O5eqv7xg_PgVgHX0',
  {
    name: '404Artisans',
    instagram: 'https://www.instagram.com/404artisans/',
    discord: 'https://discord.com/invite/RGPyMJ9',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
