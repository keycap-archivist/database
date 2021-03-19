const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1r_RNJJW5uagd8SL47-c_b_lvb2TuxBsqU6zJhFzs2Vk',
  {
    name: 'Hello Caps',
    instagram: 'https://www.instagram.com/hello__caps/',
    discord: 'https://discord.com/invite/T2pDdk9',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
