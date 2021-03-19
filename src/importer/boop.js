const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '18QS_4zYR3rFtGLLV1fPZCce5vc6i8_3kauY36xUtTdk',
  {
    name: 'Booper-Omniclectic',
    instagram: 'https://www.instagram.com/omniclectic/',
    website: 'https://geekhack.org/index.php?topic=76134.0',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
