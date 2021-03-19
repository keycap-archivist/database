const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1Y1Ip37QbnjNNiOYEAvbv9KVz9A74DFEufDDF22F1OvA', {
  name: 'Deathcaps',
  instagram: 'https://www.instagram.com/death_caps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
