const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1crfV15xlpsIIfDxo0PGoEE40ZZfMUkl4JOZO_d1sILY',
  {
    name: 'Latrialum',
    instagram: 'https://www.instagram.com/latrialum/',
    discord: 'https://discord.com/invite/latrialum',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
