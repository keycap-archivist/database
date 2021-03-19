const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('10pezHskqq5EVPEKb2fkm2e8gFrch-rWtXB3eQy_KbkI', {
  name: 'AX Studio',
  instagram: 'https://www.instagram.com/a.x_studio/',
  website: 'https://linktr.ee/AX_studio',
});

launcher(scrap);

module.exports = {
  scrap,
};
