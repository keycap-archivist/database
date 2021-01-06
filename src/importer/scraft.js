const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1zM8PAeSNFJ1Voo4m2Qpcjqtymy_umMBBMVt_USkoYCs', {
  name: 'S-Craft Studio',
  website: 'https://s-craft.studio/',
  instagram: 'https://www.instagram.com/scraft.studio.keycap/',
  discord: 'https://discord.com/invite/tm6sXVMPHb',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
