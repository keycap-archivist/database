const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1KcZjWQ59gmgNoX1piEdf6MX1r6sBig2_G9AYrs1SjBQ', {
  name: 'Hot Keys Project',
  website: 'https://www.hotkeysproject.com',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
