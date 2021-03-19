const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1sjsPqvqcjt3Wm3MDomwffYVQYjn_g3SDQX-7G1bNN0U',
  {
    name: 'Nubbinator',
    website: 'https://geekhack.org/index.php?topic=52829.0',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
