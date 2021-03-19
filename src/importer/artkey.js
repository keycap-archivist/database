const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1piD-uC3eAwy0dkqxnsZoYr_-AnezmelpFnHfuK3RslM', {
  name: 'Artkey',
  instagram: 'https://www.instagram.com/artkey.universe/',
  website: 'https://artkeyuniverse.com/',
  discord: 'https://discord.com/invite/DwAzEpt',
});

launcher(scrap);

module.exports = {
  scrap,
};
