const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1NGfIh3aAU5CwE425oshmoUBEjs11In1j7pVUHrov8Vs', {
  name: 'EzKeys',
  website: 'https://ezkeys.store/',
  instagram: 'https://www.instagram.com/ezkeys.store/',
  discord: 'https://discord.gg/s23JQE9XUY',
});

launcher(scrap);

module.exports = {
  scrap,
};
