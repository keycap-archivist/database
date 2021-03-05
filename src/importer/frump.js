const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('15arZPVtJHvLxrF20l_Oc-cZCwZrwtMI_SyiD2KDsvWg', {
  name: 'Frumpzkeys',
  instagram: 'https://www.instagram.com/frumpzkeys/',
  website: 'https://www.frumpzkeys.com/',
  discord: 'https://discord.gg/JpgPENx',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
