const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1SLiSnTXJXR6X5jT5VnmAe4e3K2yFgZosxBUY1kQQKwo', {
  name: 'Bro Caps',
  instagram: 'https://www.instagram.com/bro_caps/',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
