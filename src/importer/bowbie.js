const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1CyKhBbny0xMHcbHtdFQC_P0nrczYOpYdz3KV6ujdPnc', {
  name: 'Bowbie',
  instagram: 'https://www.instagram.com/bowbie.keycaps/',
  discord: 'https://discord.com/invite/NFywSSkhjY',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
