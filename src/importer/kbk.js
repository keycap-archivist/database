const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1656SEjL_uolfVYeUgiAjbelyM_HhxAg77oTCPWiviD8',
  {
    name: 'KBK-KWK',
    website: 'https://geekhack.org/index.php?topic=55490.0',
  },
  ['pop'],
);

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
