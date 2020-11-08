const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('11EAZ-nVLgIKuRXEXQDQ1SJotvq871jPLMo9HlS3eAZg', {
  name: 'Binirias',
  instagram: 'https://www.instagram.com/binirias/',
  discord: 'https://discord.com/invite/QbWBydq3k2',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
