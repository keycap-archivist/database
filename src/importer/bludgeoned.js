const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1KKMT4uvPquXcrWF1dX3p3R-PJ_0A98oUO2kwkNvLOd8',
  {
    name: 'Bludgeoned Kaps',
    instagram: 'https://www.instagram.com/blud_kaps/',
    website: 'https://www.bludkaps.com/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
