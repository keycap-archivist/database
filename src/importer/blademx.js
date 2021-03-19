const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1phPDeQ05dFkGzaXeVZzCjv-E8c58xh6skD0cR_koE1k',
  {
    name: 'BladeMX',
    instagram: 'https://instagram.com/blade.mx',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
