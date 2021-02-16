const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1VNVGf02zR9t3QBYXbxV9SqJFuilQBpKxWHTj0iWrX3w', {
  name: 'Keycat',
  instagram: 'https://www.instagram.com/thekeycat',
  website: 'https://thekeycat.com',
  discord: 'https://discord.com/invite/9fgWcFDb2f',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
