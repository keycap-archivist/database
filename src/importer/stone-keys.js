const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1kVAbEYLLsFT4y6k0b7A1aenvKOtPzX93cSDXqC_f2eQ', {
  name: 'Stone Keys',
  instagram: 'https://www.instagram.com/stone.keys.world/',
});

launcher(scrap);

module.exports = {
  scrap,
};
