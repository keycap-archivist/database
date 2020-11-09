const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1UGwGloN5Cf6w_goJB6FX3FcDiB8EsCjHLLB4r17T3OE', {
  name: 'ProjectKey',
  instagram: 'https://www.instagram.com/projectkey.hk',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
