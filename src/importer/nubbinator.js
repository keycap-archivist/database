const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1sjsPqvqcjt3Wm3MDomwffYVQYjn_g3SDQX-7G1bNN0U',
  {
    name: 'Nubbinator',
    website: 'https://geekhack.org/index.php?topic=52829.0',
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
