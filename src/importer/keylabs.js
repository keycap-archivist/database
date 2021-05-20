const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1-VofkRGFmgtlq7R8986aXr8kdMYw9gsT59cjhEgn8D8', {
  name: 'KeyLabs Keycaps',
  website: 'https://keylabs.gg/',
  instagram: 'https://instagram.com/keylabskeycaps',
  discord: 'https://discord.gg/myVMevJ',
});

launcher(scrap);

module.exports = {
  scrap,
};
