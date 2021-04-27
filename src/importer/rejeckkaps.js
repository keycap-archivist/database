const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '10EGmT_ifrjOuqFENtfrxfWljiR8etxHdmyU-gLAhfQw',
  {
    name: 'Rejeck Kaps',
    instagram: 'https://www.instagram.com/rejeck_kaps/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};