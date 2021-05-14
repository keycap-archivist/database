const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('16IlT-1jACqQYUyyEz15-XWG684vyM73z8zM_ABx_UMs', {
  name: 'Doohickeys',
  instagram: 'https://www.instagram.com/doohickeycaps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
