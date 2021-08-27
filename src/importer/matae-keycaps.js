const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1PZ-Rf46GQiDdG3E6R837QEknkapMMbmqPPXnq0l2vbg', {
  name: 'Matae Keycaps',
  instagram: 'https://www.instagram.com/mataekeycaps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
