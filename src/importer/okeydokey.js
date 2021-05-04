const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1_khNYhY3YlyeRK9Tok3qDQ-FJU-lBittK0fsNiLbWhI', {
  name: 'okeydokey',
  website: 'https://okeydokey.studio/',
  instagram: 'https://www.instagram.com/okeydokey.studio/',
  discord: 'https://discord.com/invite/8EDEy94zwJ',
});

launcher(scrap);

module.exports = {
  scrap,
};
