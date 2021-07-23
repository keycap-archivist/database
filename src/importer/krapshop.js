const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1YUGAY-ZxuFC9dCF_fXZ8tVW8T0LSN9FlLjxRTscnoVc', {
  name: 'Krap Shop',
  instagram: 'https://www.instagram.com/krapshop/',
});

launcher(scrap);

module.exports = {
  scrap,
};
