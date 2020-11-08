const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1KKMT4uvPquXcrWF1dX3p3R-PJ_0A98oUO2kwkNvLOd8',
  {
    name: 'Bludgeoned Kaps',
    instagram: 'https://www.instagram.com/blud_kaps/',
    website: 'https://www.bludkaps.com/',
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
