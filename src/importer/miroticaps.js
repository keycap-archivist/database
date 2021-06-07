const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1tu1aiEHLDCMX3E7nv8ikNl60o-xv4fFdar8krU6Cstc',
  {
    name: 'Miroticaps',
    instagram: 'https://www.instagram.com/miroticaps',
    discord: 'https://www.discord.gg/miroticaps'
  }
);

launcher(scrap);

module.exports = {
  scrap,
};
