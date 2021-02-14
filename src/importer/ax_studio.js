const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('10pezHskqq5EVPEKb2fkm2e8gFrch-rWtXB3eQy_KbkI', {
  name: 'AX Studio',
  instagram: 'https://www.instagram.com/a.x_studio/',
  website: 'https://linktr.ee/AX_studio',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
