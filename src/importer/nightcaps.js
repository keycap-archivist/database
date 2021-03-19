const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1GpFn7f6xb2hF0REHKe4ts2wUeHR5CLX8yUMAqSlGW0k',
  {
    name: 'Nightcaps',
    instagram: 'https://www.instagram.com/nightcaps.keycaps/',
    website: 'https://geekhack.org/index.php?topic=79513.0',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
