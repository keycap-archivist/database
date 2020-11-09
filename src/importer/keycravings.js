const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1QjFV7yp4Ez8k51qPo2fx_2sXVH9l7SdbI3_sy_E7R_o',
  {
    name: 'KeyCravings',
    instagram: 'https://www.instagram.com/keycravings/',
    website: 'https://keycravings.com',
    discord: 'https://discord.com/invite/GJdKu6r',
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
