const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1656SEjL_uolfVYeUgiAjbelyM_HhxAg77oTCPWiviD8',
  {
    name: 'KBK-KWK',
    website: 'https://geekhack.org/index.php?topic=55490.0',
    instagram: 'https://www.instagram.com/hipsterpunks/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
