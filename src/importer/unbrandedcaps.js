const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1nQIdjUjkWGyGAIgiEl2oXANX2MJj91uFhCPKOLx2qWw',
  {
    name: 'Unbranded.caps',
    instagram: 'https://www.instagram.com/unbranded.caps/',
    discord: 'https://discord.com/invite/24hy8BA',
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
