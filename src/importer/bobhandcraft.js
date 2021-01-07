const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1Igk_at2yvP_Bd6GNd3_GLCQmooNszkNDDvm2b6yqIQM',
  {
    name: 'B.o.B Handcraft',
    instagram: 'https://www.instagram.com/bobkeycaps/',
    discord: 'https://discord.com/invite/HRkaz4k',
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
