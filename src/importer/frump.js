const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('15arZPVtJHvLxrF20l_Oc-cZCwZrwtMI_SyiD2KDsvWg', {
  name: 'Frumpzkeys',
  instagram: 'https://www.instagram.com/frumpzkeys/',
  website: 'https://www.frumpzkeys.com/',
  discord: 'https://discord.gg/JpgPENx',
});

launcher(scrap);

module.exports = {
  scrap,
};
