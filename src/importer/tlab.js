const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1sjUG3_qviJnpMV7w6hAAPKjcLtLVrk-8vrGVXqCptdc', {
  name: 'T-Lab',
  instagram: 'https://www.instagram.com/the.tlab/',
  discord: 'https://discord.gg/JtrNBUK7RK',
});

launcher(scrap);

module.exports = {
  scrap,
};