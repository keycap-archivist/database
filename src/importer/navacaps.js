const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1YP-CG6HSuG04dWwG-PUyql0_sBwmae_3q3ukr5N8nJM',
  {
    name: 'Navacaps',
    instagram: 'https://www.instagram.com/navacaps/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
