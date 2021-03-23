const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1nhTGlHevXa6adT_nUrr8aSwt0MevlqlRA3K4_AAr7nE', {
  name: 'Obscura',
  instagram: 'https://www.instagram.com/obscuracaps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
