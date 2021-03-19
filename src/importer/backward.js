const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1eHoHMjOIaZv57h3XgOfamgWaE4nfMbFKLj827XNKSac',
  {
    name: 'Backward Caps',
    instagram: 'https://www.instagram.com/backward.caps.sales/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
