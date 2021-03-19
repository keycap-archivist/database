const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1RKX9sVYGkGQKnfGjaLeiFuYwA5zbi5UYfdwSYxHK90w', {
  name: 'Win Keys',
  instagram: 'https://www.instagram.com/win_keys/',
  discord: 'https://discord.com/invite/X9xnfH9QME',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
