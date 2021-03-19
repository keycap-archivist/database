const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('15NNk_ttTXCBCHTzyEE3_EigOHPYnc1M5fVGRZJIt0AA', {
  name: 'Hellbent Caps',
  instagram: 'https://www.instagram.com/hellbentcaps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
