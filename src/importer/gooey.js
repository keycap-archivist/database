const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('15tTzH6j6qne6WHnADVr_kHI_n2WJUD7Zk26Qdiu_SLA', {
  name: 'gooey keys',
  instagram: 'https://www.instagram.com/gooeykeys/',
  discord: 'https://discord.com/invite/Wuz3dS2hkX',
  website: 'https://www.gooeykeys.com/',
});

launcher(scrap);

module.exports = {
  scrap,
};
