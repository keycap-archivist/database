const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('172dSOYEqvHX0ihkMkq-iB4fwqKAuKaoSQDDCdLDucVc', {
  name: 'Resin Party',
  website: 'https://geekhack.org/index.php?topic=98079.0',
});

launcher(scrap);

module.exports = {
  scrap,
};
