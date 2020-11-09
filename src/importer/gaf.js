const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1AdPXkALzPErnyMQZrWDJ6o-jCvFB34XeZyz00FDDvLY',
  {
    name: 'Grimey as Fuck',
    instagram: 'https://www.instagram.com/gaf_caps/',
    discord: 'https://discord.com/invite/gaf',
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
