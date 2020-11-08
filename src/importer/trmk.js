const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('19r0FNbI7cLrjogfDviC7WT2HkuRax9RmPZwn3B_DNOY', {
  name: 'trmk',
  instagram: 'https://www.instagram.com/trmkcaps/',
  website: 'https://geekhack.org/index.php?topic=101348.msg2780216#msg2780216',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
