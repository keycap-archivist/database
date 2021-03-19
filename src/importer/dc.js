const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1ENp3M-HymI9LsJRloDGuo3o9s-FXHzFj6hWazGfXSEQ',
  {
    name: 'DCcaps',
    instagram: 'https://www.instagram.com/dccaps/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
