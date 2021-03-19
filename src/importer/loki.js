const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1QGRxPMGI-GIN63LCatprE60zDfcVmy67cG53aXLDf8M',
  {
    name: 'Lo-Ki Caps',
    website: 'https://www.lokicaps.com/',
    instagram: 'https://www.instagram.com/loki_studios/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
