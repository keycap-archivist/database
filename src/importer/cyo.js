const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1Rhig59IdZh5IZ3JP3R_FjZncRxo2M5tfPiUyxJBuLq8',
  {
    name: 'C.Y.O Keycaps',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
