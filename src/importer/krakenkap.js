const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1zvIUqPg7D-vge_JzpzqmnD4lEkQgzaQCBFc10FXmasA', {
  name: 'KrakenKap',
  instagram: 'https://www.instagram.com/krakenkap/',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
