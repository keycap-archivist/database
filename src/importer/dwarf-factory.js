const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('13sG3yOqu-7AFkHRcSulp_Iwm0N4g9SOKwSi0vWxx2yA', {
  name: 'Dwarf Factory',
  website: 'https://www.dwarf-factory.com/',
  instagram: 'https://www.instagram.com/dwarf.factory/',
  discord: 'https://discord.gg/JwfwJknTsP',
});

launcher(scrap);

module.exports = {
  scrap,
};
