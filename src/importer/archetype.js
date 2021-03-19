const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1A8WdP-pS82xPQuxw98EuOyfmAncqlPLmLtzS2uujfWg', {
  name: 'Archetype',
  instagram: 'https://www.instagram.com/archetype_mk/',
  website: 'https://archetypemade.com',
  discord: 'https://discord.com/invite/rTe7uwy',
});

launcher(scrap);

module.exports = {
  scrap,
};
