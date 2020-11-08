const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1SOtOKEBn8oUXnECK0_9-sJ5YBh6BijlbKB6CZsNEBbc',
  {
    name: 'Glyco Caps',
    instagram: 'https://www.instagram.com/glycocaps/',
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
