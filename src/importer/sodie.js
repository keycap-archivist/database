const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1R2dHjC3M2dab4_pMVnc-ti11gazoD42Lqknjm5EW2R0', {
  name: 'SodieCaps',
  instagram: 'https://www.instagram.com/sodiecaps/',
  website: 'http://sodiecaps.com/',
  discord: 'https://discord.com/invite/K6vGuvY',
});

launcher(scrap);

module.exports = {
  scrap,
};
