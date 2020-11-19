const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1EZstC5O7OMdsCMMzs-YbV3Y5pooytHrHpLWaULr3pEI',
  {
    name: 'DustyCaps',
    website: 'https://dustycaps.com',
    instagram: 'https://www.instagram.com/dustykeycaps/',
    discord: 'https://discord.com/invite/Dqyc2jc',
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
