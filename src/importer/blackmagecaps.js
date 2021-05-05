const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1uIATE-QeIMq_kZnXi_EVfZZoHpM3dmc2woBekYV4L2A', {
  name: 'Black Mage Caps',
  instagram: 'https://www.instagram.com/blackmagecaps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
