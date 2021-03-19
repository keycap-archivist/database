const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('17xkdiEkCjV-4bRoLg5FgXGxlPDX1NPLCZjWIasnFaeY', {
  name: 'Rathcaps',
  instagram: 'https://www.instagram.com/rathcaps/',
  discord: 'https://discord.com/invite/fnVPZpX',
});

launcher(scrap);

module.exports = {
  scrap,
};
