const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1d-CVHj9vA0l-qQjYOFws6Wh9YPLSpCfFCwGDsmDLoJA', {
  name: 'KeyForge',
  instagram: 'https://www.instagram.com/keyforge/',
  website: 'https://www.keyforge.com/',
});

launcher(scrap);

module.exports = {
  scrap,
};
