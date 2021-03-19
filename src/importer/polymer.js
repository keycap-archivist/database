const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('16FowOOELHP9DmQ7rKdVmgvvEGEgiOhwDtxAA58IDJCg', {
  name: 'Polymer Salon',
  instagram: 'https://www.instagram.com/fendentkeys/',
  website: 'https://geekhack.org/index.php?topic=85461.0',
});

launcher(scrap);

module.exports = {
  scrap,
};
