const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '14EBfRe0AxEbCok856_HrL6teQAlkeQL3kpa3z8lenTc',
  {
    name: 'CozCaps',
    instagram: 'https://www.instagram.com/cozkeycaps/',
    website: 'https://www.cozcaps.com/',
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
