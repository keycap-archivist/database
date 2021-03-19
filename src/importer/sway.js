const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1tRhoMKBVZuBxE9UAynqtBNrm__OEjQnOF07NIUamQtE', {
  name: 'Sway Caps',
  instagram: 'https://www.instagram.com/sway.caps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
