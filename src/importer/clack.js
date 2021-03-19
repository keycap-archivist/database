const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1C9I7PaXFtpNzI8Zb_6ZTjHLMrQ8ERyWn_IvMD8mVoq0', {
  name: 'Clack Factory',
  website: 'https://wiki.geekhack.org/index.php?title=Clack_Factory',
});

launcher(scrap);

module.exports = {
  scrap,
};
