const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1SLiSnTXJXR6X5jT5VnmAe4e3K2yFgZosxBUY1kQQKwo', {
  name: 'Bro Caps',
  instagram: 'https://www.instagram.com/bro_caps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
