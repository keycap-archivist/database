const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('18mc8abYoFIYDEqpvJzG5qYLXoQBTBUu9DUp7JSmIFxM', {
  name: 'Lividity',
  instagram: 'https://www.instagram.com/lividitycaps/',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
