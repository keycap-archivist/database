const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('18jTzayNzUDECKOfe-ZXa6oDucNj8_Pp0jEjsdzvvSws', {
  name: 'KeyKollectiv',
  instagram: 'https://www.instagram.com/keykollectiv/',
  website: 'https://www.keykollectiv.com/',
});

launcher(scrap);

module.exports = {
  scrap,
};
