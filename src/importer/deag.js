const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1SsLhATHPRDOSAiywL5ktrGAuZbW9swCOd2cBGuUds3E', {
  name: 'DeagCaps',
  instagram: 'https://www.instagram.com/deagcaps/',
  discord: 'https://discord.com/invite/B4zub6jC3S',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
