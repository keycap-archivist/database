const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1lx648GXchw4ZpctFtirPx_teQcpcgVWuy83W32JY4KU',
  {
    name: 'Coconut Keycaps',
    instagram: 'https://www.instagram.com/coconut.keycaps/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
