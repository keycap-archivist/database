const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '17Zb-LmujFdcnOZ2_VFhoPHKP1gZJmzEKJH2fawFeqpk',
  {
    name: 'TinyMakesThings',
    instagram: 'https://www.instagram.com/tinymakesthings/',
    website: 'https://www.tinymakesthings.com/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
