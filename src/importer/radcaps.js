const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1KINOK9cUUA28pSGnHc8ZI-RM36o12ADojXp7ZeNdTh4', {
  name: 'RADcaps',
  instagram: 'https://www.instagram.com/radcaps_/',
});

launcher(scrap);

module.exports = {
  scrap,
};
