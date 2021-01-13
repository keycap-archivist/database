const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1cDD3aNsQXHJfyskP8906BUwfc1_4H_JJTtZ9akhQkOc', {
  name: 'Girlycaps Studios',
  instagram: 'https://www.instagram.com/girlystudios_caps',
  website: 'https://girlystudios.com/',
  discord: 'http://discord.gg/YeZTMss',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
