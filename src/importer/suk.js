const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '17XHW8yaMXVS5i82lOrjXIF7Q68NwCg6w9B6BiEn7A1k',
  {
    name: 'Suited Up Keycaps',
    instagram: 'https://www.instagram.com/suitedupsuitedup/',
    website: 'https://suitedupkeycaps.com/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
