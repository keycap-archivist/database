const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1qoQ7zBUrkCvfu-xMHcCvxObflfy8z8fWJnkMBJcdp_w', {
  name: 'GTB',
  instagram: 'https://www.instagram.com/glenntheblack/',
  website: 'https://gtblabs.com/',
});

launcher(scrap);

module.exports = {
  scrap,
};
