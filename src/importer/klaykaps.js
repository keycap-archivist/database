const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1U_Te4TY5Nxwme5CjnFMd3tGqSYXJxrkYK7c7VlkI2MU', {
  name: 'Klaykaps',
  instagram: 'https://www.instagram.com/klaykaps/',
  website: 'https://klaykaps.com/',
  discord: 'https://www.discord.com/invite/TZDCwkr',
});

launcher(scrap);

module.exports = {
  scrap,
};
