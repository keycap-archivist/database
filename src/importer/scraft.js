const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1zM8PAeSNFJ1Voo4m2Qpcjqtymy_umMBBMVt_USkoYCs', {
  name: 'S-Craft Studio',
  website: 'https://s-craft.studio/',
  instagram: 'https://www.instagram.com/scraft.studio.keycap/',
  discord: 'https://discord.com/invite/tm6sXVMPHb',
});

launcher(scrap);

module.exports = {
  scrap,
};
