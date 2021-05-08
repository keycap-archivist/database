const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1EllRzUrKjgARXPRYy180K9ru_aYgVG89DQ8CxxFViRc', {
  name: 'SirReal Caps',
  instagram: 'https://www.instagram.com/sir.realcaps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
