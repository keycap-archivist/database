const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '15OgzFWmOJWM5h0JBMV85041Vjd88lNXfj6cWkwd-BFM',
  {
    name: 'Bad and Booj Keys',
    instagram: 'https://www.instagram.com/badch4d/',
    website: 'https://www.badchad.work',
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
