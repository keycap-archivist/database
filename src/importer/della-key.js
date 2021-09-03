const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1beOD7ijqhqVV3FaWnvMF08FQ5KQGO-PENN5hohyrEm4', {
  name: 'DELLA KEY',
  instagram: 'https://www.instagram.com/della__key/',
  discord: 'https://discord.gg/VtyQmUyE6g',
});

launcher(scrap);

module.exports = {
  scrap,
};
