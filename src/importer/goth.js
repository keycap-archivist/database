const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('17YdYcvKifysUDk6mt750Jgq7Zke2kSi66kfqc9BE6RQ', {
  name: 'Gothcaps',
  instagram: 'https://www.instagram.com/gothcaps/',
  discord: 'https://discord.com/invite/ncm4K6D',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
