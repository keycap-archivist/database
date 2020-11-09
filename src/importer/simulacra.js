const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1tY7twR6E65afan23BediwbxwvsjJqXtleE949r5mNeg', {
  id: 'Simulacra',
  name: 'Simulacra Caps',
  instagram: 'https://www.instagram.com/simulacra_caps/',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
