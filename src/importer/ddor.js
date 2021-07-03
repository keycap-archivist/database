const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1x6w725FhjkOUwu3ZMYMMtDgZg9404CdexIYKgQdBE8Y', {
  name: 'DDOR Studio',
  instagram: ' https://www.instagram.com/ddor.studio/',
});

launcher(scrap);

module.exports = {
  scrap,
};
