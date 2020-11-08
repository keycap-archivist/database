const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1c0H4ABr3csHH5B9WP7yyKfCcjLvBE7aJrNwlQzcczcI', {
  name: 'CYSM',
  instagram: 'https://www.instagram.com/cysm_caps/',
  discord: 'https://discord.com/invite/mZZChn7',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
