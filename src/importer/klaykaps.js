const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1U_Te4TY5Nxwme5CjnFMd3tGqSYXJxrkYK7c7VlkI2MU', {
  name: 'Klaykaps',
  instagram: 'https://www.instagram.com/klaykaps/',
});

launcher(scrap);

module.exports = {
  scrap,
};