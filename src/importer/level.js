const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1_9U5dSSCKeSQcBIhbHPigUs7jiF0AqNI0MYo5KNtpJ8',
  {
    name: 'Level caps',
    instagram: 'https://www.instagram.com/level.caps/',
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
