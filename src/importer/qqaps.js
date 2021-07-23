const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1D1Pt_Jp0Mm35O0a2vFQ6mh2UzcjT1JBWxjqUcc2tSBY', {
  name: 'Q Qaps',
  instagram: 'https://www.instagram.com/cque.q_qaps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
