const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1QXedbahyT1FndM9QdxZ8HC0RshpbyCvChTuQTY688lE', {
  name: 'Kaphaus',
  instagram: 'https://www.instagram.com/the.kaphaus/',
  website: 'https://geekhack.org/index.php?topic=85295.0',
});

launcher(scrap);

module.exports = {
  scrap,
};
