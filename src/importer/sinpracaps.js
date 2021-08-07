const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('11mcz58aQkOb72h70LZelv9teAqdUrL-o57I0fIA2VFg', {
  name: 'Sinpra Caps',
  instagram: 'https://www.instagram.com/sinpracaps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
