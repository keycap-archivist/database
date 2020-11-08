const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1yyLznWKS7QTrOLTTfP9izvDIlEE_q9n0To1Id3N_0FQ', {
  name: 'LazyCaps',
  instagram: 'https://www.instagram.com/lazycaps/',
  website: 'http://lazycaps.club',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
