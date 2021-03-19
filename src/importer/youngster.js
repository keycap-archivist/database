const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1OB-qI-3izrbmWZG08Qi-ihNaCRRB_qmvivs0KCEWpAk', {
  name: 'YoungsterHarris',
  instagram: 'https://www.instagram.com/youngsterharris/',
  discord: 'https://discord.com/invite/Dv88j529',
});

launcher(scrap);

module.exports = {
  scrap,
};
