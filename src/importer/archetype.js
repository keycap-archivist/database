const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1A8WdP-pS82xPQuxw98EuOyfmAncqlPLmLtzS2uujfWg', {
  name: 'Archetype',
  instagram: 'https://www.instagram.com/archetype_mk/',
  website: 'https://archetypemade.com',
  discord: 'https://discord.com/invite/rTe7uwy',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
