const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1EJ8IodjlMPG-TtmKwTZuCvIQYO9uuD_phTnMiNqjh4s', {
  name: 'Gaia’s Creature',
  website: 'https://gaia-creature.com',
  instagram: 'https://www.instagram.com/gaia_creature',
});

launcher(scrap);

module.exports = {
  scrap,
};