const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1XwH1785exI1NCfr3M-ZtkcTxDe4fICVP0Tmbvg00HXQ', {
  name: 'Mastonon.kaps',
  instagram: 'https://www.instagram.com/mastonon.kaps/',
  discord: 'https://discord.gg/ySC64us',
});

launcher(scrap);

module.exports = {
  scrap,
};
