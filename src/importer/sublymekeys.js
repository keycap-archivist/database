const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1Q6lOKRofrQXEFxQddLXDYC2B_9rZ6pd7qbUfueiranI',
  {
    name: 'Sublyme Key’s',
    instagram: 'https://www.instagram.com/sublyme_keys/',
  }
);

launcher(scrap);

module.exports = {
  scrap,
};
