const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1qoQ7zBUrkCvfu-xMHcCvxObflfy8z8fWJnkMBJcdp_w', {
  name: 'GTB',
  instagram: 'https://www.instagram.com/glenntheblack/',
  website: 'https://gtblabs.com/',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
