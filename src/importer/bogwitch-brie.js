const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('106B5I-IfI1pZex401MHj6c_e7MPUSPyplQsvUOPxmO4', {
  name: 'Bogwitch Brie',
  instagram: 'https://www.instagram.com/bogwitch.brie/',
});

launcher(scrap);

module.exports = {
  scrap,
};
