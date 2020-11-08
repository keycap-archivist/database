const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1phPDeQ05dFkGzaXeVZzCjv-E8c58xh6skD0cR_koE1k',
  {
    name: 'BladeMX',
    instagram: 'https://instagram.com/blade.mx',
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
