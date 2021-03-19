const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1ibnukzm73aRIkBm83OhmPsT6wdyA1GH3MRQ6FPBkOSA',
  {
    name: 'BrewCaps',
    instagram: 'https://www.instagram.com/brew_caps/',
    website: 'https://brewcaps.store/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
