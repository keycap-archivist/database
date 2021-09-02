const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1pkiYq1bxrHYqydM7yj9dKZPG8vC8fNBMGOrQGSyT7qQ', {
  name: 'ChickenCap',
  instagram: 'https://www.instagram.com/chickencap123/',
});

launcher(scrap);

module.exports = {
  scrap,
};
