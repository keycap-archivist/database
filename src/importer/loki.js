const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1QGRxPMGI-GIN63LCatprE60zDfcVmy67cG53aXLDf8M',
  {
    name: 'Lo-Ki Caps',
    website: 'https://www.lokicaps.com/',
    instagram: 'https://www.instagram.com/loki_studios/',
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
