const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1nQIdjUjkWGyGAIgiEl2oXANX2MJj91uFhCPKOLx2qWw',
  {
    name: 'Unbranded.caps',
    instagram: 'https://www.instagram.com/unbranded.caps/',
    discord: 'https://discord.com/invite/24hy8BA',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
