const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1745lR0WbiVE9-loe1n4evgd6cPE07yAysP-nZxF2ji0', {
  name: 'Wildstory Caps',
  instagram: 'https://www.instagram.com/wildstory.caps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
