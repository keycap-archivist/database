const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1JpL8NeP-J85x_Viy_VGzM5fRpEAMPw_giRO78eHnc4E', {
  name: 'Dalifu Caps',
  instagram: 'https://www.instagram.com/dalifu.caps/',
  discord: 'https://discord.com/invite/dXDBwKgPfE',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
