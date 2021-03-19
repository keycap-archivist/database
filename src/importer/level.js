const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1_9U5dSSCKeSQcBIhbHPigUs7jiF0AqNI0MYo5KNtpJ8',
  {
    name: 'Level caps',
    instagram: 'https://www.instagram.com/level.caps/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
