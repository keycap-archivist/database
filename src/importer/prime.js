const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1EwmD8ej34LImbIWi9hw_5Tsk7GAGZBhoVMJwIFG_Ad8',
  {
    name: 'PrimeCaps',
    instagram: 'https://www.instagram.com/prime_caps/',
    website: 'https://primecaps.ca/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
