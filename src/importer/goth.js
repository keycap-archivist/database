const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('17YdYcvKifysUDk6mt750Jgq7Zke2kSi66kfqc9BE6RQ', {
  name: 'Gothcaps',
  instagram: 'https://www.instagram.com/gothcaps/',
  discord: 'https://discord.gg/zCx5PXkSkD',
});

launcher(scrap);

module.exports = {
  scrap,
};
