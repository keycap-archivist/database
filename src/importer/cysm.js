const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1c0H4ABr3csHH5B9WP7yyKfCcjLvBE7aJrNwlQzcczcI', {
  name: 'CYSM',
  instagram: 'https://www.instagram.com/cysm_caps/',
  discord: 'https://discord.com/invite/mZZChn7',
});

launcher(scrap);

module.exports = {
  scrap,
};
