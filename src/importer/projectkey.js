const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1UGwGloN5Cf6w_goJB6FX3FcDiB8EsCjHLLB4r17T3OE', {
  name: 'ProjectKey',
  instagram: 'https://www.instagram.com/projectkey.hk',
});

launcher(scrap);

module.exports = {
  scrap,
};
