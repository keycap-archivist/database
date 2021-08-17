const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1Ruol_1a4kzgLyXkeQ4d7ayu2shpsJPrHVUu7dBIYOYQ',
  {
    name: 'Craftkey',
    instagram: 'https://www.instagram.com/craftkey/',
    website: 'https://www.craftkeyartisan.com/',
    discord: 'https://discord.gg/GsQ8xj37MS',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
