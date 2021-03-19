const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1yyLznWKS7QTrOLTTfP9izvDIlEE_q9n0To1Id3N_0FQ', {
  name: 'LazyCaps',
  instagram: 'https://www.instagram.com/lazycaps/',
  website: 'http://lazycaps.club',
});

launcher(scrap);

module.exports = {
  scrap,
};
