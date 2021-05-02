const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1SyKkp4PhrCCealubpwHz5GUWfZejQGspXmgWW2T0qzw', {
  name: 'Picaps',
  instagram: 'https://www.instagram.com/pizzza013/',
  discord: 'https://discord.gg/tfmUzNuySv',
});

launcher(scrap);

module.exports = {
  scrap,
};
