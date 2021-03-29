const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1yy-k0dvNLQtG9syt3gXHEhVLzuDD7nFSmsai7SSpm94', {
  name: 'Captomaniacs',
  instagram: 'https://www.instagram.com/captomaniacs/',
});

launcher(scrap);

module.exports = {
  scrap,
};
