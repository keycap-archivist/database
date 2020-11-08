const fs = require('fs');
const path = require('path');

const SCRAPER = 'gdoc';

let scrapFrom;
let source;

if (SCRAPER === 'api') {
  // eslint-disable-next-line global-require
  scrapFrom = require('../scraper/api').scrapFrom;
  source = 'https://keycravings.com/archivist.json';
} else {
  // eslint-disable-next-line global-require
  scrapFrom = require('../scraper/gdoc').scrapFrom;
  source = '1QjFV7yp4Ez8k51qPo2fx_2sXVH9l7SdbI3_sy_E7R_o';
}

const scrap = scrapFrom(source, {
  name: 'KeyCravings',
  instagram: 'https://www.instagram.com/keycravings/',
  website: 'https://keycravings.com',
  discord: 'https://discord.com/invite/GJdKu6r',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
