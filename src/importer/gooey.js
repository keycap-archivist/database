const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('15tTzH6j6qne6WHnADVr_kHI_n2WJUD7Zk26Qdiu_SLA', {
  name: 'Gooey',
  instagram: 'https://www.instagram.com/gooeykeys/',
  discord: 'https://discord.com/invite/Wuz3dS2hkX',
  website: 'https://www.gooeykeys.com/',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
