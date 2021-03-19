const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1m7S6LaNaAg7vfZP9Bt23EYX7v3boC3TpTaqF0gBsEaM', {
  name: 'Phage Caps',
  instagram: 'https://www.instagram.com/phage.caps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
