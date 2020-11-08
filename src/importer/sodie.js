const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1R2dHjC3M2dab4_pMVnc-ti11gazoD42Lqknjm5EW2R0', {
  name: 'SodieCaps',
  instagram: 'https://www.instagram.com/sodiecaps/',
  website: 'http://sodiecaps.com/',
  discord: 'https://discord.com/invite/K6vGuvY',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
