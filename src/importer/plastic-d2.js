const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1dHvxJWBcyuM4mrPUu3Hinqn-Ue1au9INzfljCa_Ue7I', {
  name: 'Plastic Drug Dealer',
  website: 'https://www.plasticd2.ga/',
  instagram: 'https://www.instagram.com/plastic.d2/',
  discord: 'https://discord.gg/BP7ZRkpbxb',
});

launcher(scrap);

module.exports = {
  scrap,
};
