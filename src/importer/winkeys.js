const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1RKX9sVYGkGQKnfGjaLeiFuYwA5zbi5UYfdwSYxHK90w', {
  name: 'Win Keys',
  instagram: 'https://www.instagram.com/win_keys/',
  discord: 'https://discord.com/invite/X9xnfH9QME',
});

launcher(scrap);

module.exports = {
  scrap,
};
