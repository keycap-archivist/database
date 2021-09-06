const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1VDaL0vyFLSMyfmw2k-Aa3RleuEU9o3H6JPiV33zTDy4', {
  name: 'NibbNubb Keycaps',
  instagram: 'https://instagram.com/nibbnubbkeycaps',
  discord: 'https://discord.com/invite/ATfDsmRfyE',
});

launcher(scrap);

module.exports = {
  scrap,
};
