const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1KcZjWQ59gmgNoX1piEdf6MX1r6sBig2_G9AYrs1SjBQ', {
  name: 'Hot Keys Project',
  website: 'https://www.hotkeysproject.com',
});

launcher(scrap);

module.exports = {
  scrap,
};
