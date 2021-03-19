const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1NDxNP0oKZOGW_13FrXevtgagTYmgHTGn66V7MYf7sx0', {
  name: 'Sludgekidd',
  instagram: 'https://www.instagram.com/sludgekidd/',
  website: 'https://www.sludgekidd.design/',
  discord: 'https://discord.com/invite/CbwFfCk',
});

launcher(scrap);

module.exports = {
  scrap,
};
