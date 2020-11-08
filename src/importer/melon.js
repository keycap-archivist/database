const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1ceCQ48nyCfZ2u0jnzgnvVW0nuxd01a0QS48cx_TVh-U', {
  name: 'MelonKeys',
  instagram: 'https://www.instagram.com/melonkeys.keycaps',
  website: 'https://www.melonkeys.com',
  discord: 'https://discord.com/invite/WMJhYbr',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
