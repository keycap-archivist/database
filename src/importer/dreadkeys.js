const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1tzm7_NLV5XdM2tuM2naiZhDjMMygstN2XneBU_GWbeY', {
  name: 'Dreadkeys',
  website: 'https://www.dreadkeys.com/',
  instagram: 'https://www.instagram.com/dreadkeys/',
  discord: 'https://discord.gg/KDFs857bnA',
});

launcher(scrap);

module.exports = {
  scrap,
};
