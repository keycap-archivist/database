const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom('1iAaGXFW6zqBa8lx6sKyQmKTvtiDA1zEiAM4jR4zd-Bs', {
  name: 'Dollartacos',
  instagram: 'https://www.instagram.com/dollarta.co/',
  website: 'https://www.dollarta.co',
  discord: 'https://discord.com/invite/sCEE3Ce',
});

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
