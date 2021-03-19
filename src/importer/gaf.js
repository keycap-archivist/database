const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1AdPXkALzPErnyMQZrWDJ6o-jCvFB34XeZyz00FDDvLY',
  {
    name: 'Grimey as Fuck',
    instagram: 'https://www.instagram.com/gaf_caps/',
    discord: 'https://discord.com/invite/gaf',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
