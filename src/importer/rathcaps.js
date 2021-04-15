const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1mX-wUILSjmOGULIju5SKD3zKn7VE9hLl2BHgZZPTnG0', {
  name: 'Rathcaps',
  instagram: 'https://www.instagram.com/rathcaps/',
  discord: 'https://discord.com/invite/fnVPZpX',
});

launcher(scrap);

module.exports = {
  scrap,
};
