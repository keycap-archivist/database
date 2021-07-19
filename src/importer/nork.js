const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('192BiqrPFiOag5NmKTmkAVl9jak0toBjxAOQO8coyO_M', {
  name: 'Nork',
  instagram: 'https://www.instagram.com/nork.studios/',
  discord: 'https://discord.gg/BuP7S5V9st',
});

launcher(scrap);

module.exports = {
  scrap,
};