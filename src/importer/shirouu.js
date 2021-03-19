const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '177W_IQZ1HRQbSZ4pjLuWqGlhvS9sTpVZcKV_Ucs-h9M',
  {
    name: 'shirouu.kaps',
    instagram: 'https://www.instagram.com/shirouu.kaps/',
    discord: 'https://discord.gg/Fg8mvxENhK',
  },
  [],
);

launcher(scrap);

module.exports = {
  scrap,
};
