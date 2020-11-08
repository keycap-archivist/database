const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1QXedbahyT1FndM9QdxZ8HC0RshpbyCvChTuQTY688lE', {
  name: 'Kaphaus',
  instagram: 'https://www.instagram.com/the.kaphaus/',
  website: 'https://geekhack.org/index.php?topic=85295.0',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
