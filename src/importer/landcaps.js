const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1qDHsR0Y2U0W_pBPgtvB_i_xh09a1VVInbg3rK7al7Ug', {
  name: 'LandCaps',
  instagram: 'https://www.instagram.com/landcaps.keycap/',
});

launcher(scrap);

module.exports = {
  scrap,
};
