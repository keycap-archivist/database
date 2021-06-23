const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1LinZIytdrqwGE7H3TBWeIrj6ICQ_2DzWVm2Mmk904Y8',
  {
    name: 'BKM Caps',
    instagram: 'https://www.instagram.com/bkmkeycaps/',
    website: 'https://bkmcaps.com/'
  }
);

launcher(scrap);

module.exports = {
  scrap,
};
