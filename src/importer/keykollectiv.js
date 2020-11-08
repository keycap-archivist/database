const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('18jTzayNzUDECKOfe-ZXa6oDucNj8_Pp0jEjsdzvvSws', {
  name: 'KeyKollectiv',
  instagram: 'https://www.instagram.com/keykollectiv/',
  website: 'https://www.keykollectiv.com/',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
