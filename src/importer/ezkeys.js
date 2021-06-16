const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1zre4I7RO-Qx3H0TLImPrCpnXk3mGNB8w', {
  name: 'EzKeys',
  website: 'https://ezkeys.store/',
  instagram: 'https://www.instagram.com/ezkeys.store/',
  discord: 'https://discord.gg/s23JQE9XUY',
});

launcher(scrap);

module.exports = {
  scrap,
};
