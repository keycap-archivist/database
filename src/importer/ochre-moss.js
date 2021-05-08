const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1r3HhhDyLTnLJrDb5kpCazx_-j7SwOk9GHl9G-zek-N0', {
  name: 'Ochre + Moss',
  instagram: 'https://www.instagram.com/ochre.moss/',
  discord: 'https://discord.gg/EAHpSPfTE6',
});

launcher(scrap);

module.exports = {
  scrap,
};
