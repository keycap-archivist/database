const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1BVfiGhTs-8dCm2u_KpAxKGALy9X7CT94rDljgyFl0uE', {
  name: 'Monstera Keycaps',
  instagram: 'https://www.instagram.com/monsterakeycaps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
