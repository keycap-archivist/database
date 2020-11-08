const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1r_RNJJW5uagd8SL47-c_b_lvb2TuxBsqU6zJhFzs2Vk',
  {
    name: 'Hello Caps',
    instagram: 'https://www.instagram.com/hello__caps/',
    discord: 'https://discord.com/invite/T2pDdk9',
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
