const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1Y9hJ5WgjSjXhKEpeLudk542Mj_P0B9aJt56CLdf5Oas', {
  name: 'Jelly Key',
  website: 'https://www.jellykey.com/',
  instagram: 'https://www.instagram.com/jelly.key/',
  discord: 'https://discord.gg/uR5YhWA',
});

launcher(scrap);

module.exports = {
  scrap,
};
