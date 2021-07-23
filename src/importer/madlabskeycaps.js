const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('176oXSO83YXhYkVDBpoanyiroWaqXq7SmOY8OQfO6bfY', {
  name: 'Mad Labs Keycaps',
  website: 'https://www.madlabskeycaps.com/',
  instagram: 'https://www.instagram.com/mad_labs_keycaps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
