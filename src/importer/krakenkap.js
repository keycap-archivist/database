const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1zvIUqPg7D-vge_JzpzqmnD4lEkQgzaQCBFc10FXmasA', {
  name: 'KrakenKap',
  instagram: 'https://www.instagram.com/krakenkap/',
});

launcher(scrap);

module.exports = {
  scrap,
};
