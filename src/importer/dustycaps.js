const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1EZstC5O7OMdsCMMzs-YbV3Y5pooytHrHpLWaULr3pEI',
  {
    name: 'DustyCaps',
    website: 'https://dustycaps.com',
    instagram: 'https://www.instagram.com/dustykeycaps/',
    discord: 'https://discord.com/invite/Dqyc2jc',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
