const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1UGadEUhjZ-wyVywIb1-Qwpd32jPkobNaYisQTuJG-wQ',
  {
    name: 'Hunger Work Studio',
    instagram: 'https://www.instagram.com/hungerworkstudio/',
    website: 'https://hungerwork.studio/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
