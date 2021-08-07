const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1R-0hie5BZ66Uqv-FILFqHEfanQPAYwpBPMGqFWVGR_A', {
  name: 'theboxkeycap',
  instagram: 'https://www.instagram.com/theboxkeycap/',
});

launcher(scrap);

module.exports = {
  scrap,
};
