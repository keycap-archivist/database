const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '177W_IQZ1HRQbSZ4pjLuWqGlhvS9sTpVZcKV_Ucs-h9M',
  {
    name: 'shirouu.kaps',
    instagram: 'https://www.instagram.com/shirouu.kaps/',
    discord: 'https://discord.gg/Fg8mvxENhK',
  },
  [],
);

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
