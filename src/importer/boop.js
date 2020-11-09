const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '18QS_4zYR3rFtGLLV1fPZCce5vc6i8_3kauY36xUtTdk',
  {
    name: 'Booper-Omniclectic',
    instagram: 'https://www.instagram.com/omniclectic/',
    website: 'https://geekhack.org/index.php?topic=76134.0',
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
