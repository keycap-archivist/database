const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1kZoXY-9rV25G5cSwgQxAHwmcjVXNL_LUj8vxhmYYk7k', {
  name: 'Tokkipee',
  instagram: 'https://www.instagram.com/tokkipee/',
  website: 'https://tokkipee.com',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
