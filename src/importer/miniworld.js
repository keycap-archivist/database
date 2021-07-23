const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1K2IP5lV4-6PLuJcFLhpR-gJAqHhxY7baxZSG2DaSPvo', {
  name: 'Miniworld',
  website: 'https://www.miniworld.studio/',
  instagram: 'https://www.instagram.com/miniworld.keycaps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
