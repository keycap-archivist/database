const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '11BeNsND5cMw_NMfGhQfeitg4oFJGNbT4aJ9C_8_iB60',
  {
    name: 'Amidst The Clouds',
    instagram: 'https://www.instagram.com/amidst.the.clouds/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
