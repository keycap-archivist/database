const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1SsLhATHPRDOSAiywL5ktrGAuZbW9swCOd2cBGuUds3E', {
  name: 'DeagCaps',
  instagram: 'https://www.instagram.com/deagcaps/',
  discord: 'https://discord.com/invite/B4zub6jC3S',
});

launcher(scrap);

module.exports = {
  scrap,
};
