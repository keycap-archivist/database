const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1-CkxK7KHUIy9gzJkguA36eC463cBHkNeGfgLa40BKVE', {
  name: 'Myth Caps',
  instagram: 'https://www.instagram.com/myth_caps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
