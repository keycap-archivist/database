const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1cR7ceg-E5K8D-AxTq4-9Wm3s_qeUTFjTcJIJBWBZnJU', {
  name: 'Crystal Pieces',
  website: 'https://crystalpieces.com/',
  instagram: 'https://www.instagram.com/crystalpieces.crp/',
  discord: 'https://discord.com/invite/E5SEYdvAuG',
});

launcher(scrap);

module.exports = {
  scrap,
};
