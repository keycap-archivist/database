const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '13LmVzCkuN7uGhair0QXq1sJkI7LK6jBs-uhnVU-hDII',
  {
    name: 'Fraktal Kaps',
    instagram: 'https://www.instagram.com/fraktal.kaps/',
    website: 'https://fraktalkaps.com/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
