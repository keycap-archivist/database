const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('172dSOYEqvHX0ihkMkq-iB4fwqKAuKaoSQDDCdLDucVc', {
  name: 'Resin Party Design',
  website: 'https://geekhack.org/index.php?topic=98079.0',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
