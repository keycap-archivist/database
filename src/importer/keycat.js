const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1VNVGf02zR9t3QBYXbxV9SqJFuilQBpKxWHTj0iWrX3w', {
  name: 'Keycat',
  instagram: 'https://www.instagram.com/thekeycat',
  website: 'https://thekeycat.com',
  discord: 'https://discord.com/invite/9fgWcFDb2f',
});

launcher(scrap);

module.exports = {
  scrap,
};
