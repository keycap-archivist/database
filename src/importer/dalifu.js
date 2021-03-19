const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1JpL8NeP-J85x_Viy_VGzM5fRpEAMPw_giRO78eHnc4E', {
  name: 'Dalifu Caps',
  instagram: 'https://www.instagram.com/dalifu.caps/',
  discord: 'https://discord.com/invite/dXDBwKgPfE',
});

launcher(scrap);

module.exports = {
  scrap,
};
