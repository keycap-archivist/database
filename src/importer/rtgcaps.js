const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1XNeLhAdqfwbgmpm4qbN9nUFQzLktN0JiEJGgRVCEnpk',
  {
    name: 'rtg_caps_',
    instagram: 'https://www.instagram.com/rtg_caps_/',
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
