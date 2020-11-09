const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '15c2a6DnBQPJbnVhbjH54KIKVr_I-twb7EQgXB37GAlM',
  {
    name: 'Just Another Keymaker',
    instagram: 'https://www.instagram.com/justanotherkeymaker/',
    website: 'https://www.keymaker.space/',
    discord: 'https://discord.com/invite/XMnxAYR',
  },
  ['pop'],
);

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
