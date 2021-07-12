const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1QXedbahyT1FndM9QdxZ8HC0RshpbyCvChTuQTY688lE', {
  name: 'Kaphaus',
  instagram: 'https://www.instagram.com/kap_haus/',
  website: 'https://geekhack.org/index.php?topic=85295.0',
  discord: 'https://discord.gg/rmS2bgTFDU',
});

launcher(scrap);

module.exports = {
  scrap,
};
