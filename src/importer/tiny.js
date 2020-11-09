const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '17Zb-LmujFdcnOZ2_VFhoPHKP1gZJmzEKJH2fawFeqpk',
  {
    name: 'TinyMakesThings',
    instagram: 'https://www.instagram.com/tinymakesthings/',
    website: 'https://www.tinymakesthings.com/',
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
