const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1aY15g26g_KGpSfBv5XPPeXPFnP9Lq9xgJUlF3IVsm_c', {
  name: 'Kapsule Lab',
  instagram: 'https://www.instagram.com/kapsule.lab/',
  discord: 'https://discord.gg/KqmUFqYqNA',
});

launcher(scrap);

module.exports = {
  scrap,
};
