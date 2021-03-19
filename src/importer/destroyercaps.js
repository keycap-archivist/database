const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1Me6mlm7YPdH0v5nkCQBZrGJ555gT2RAXwLzC_g4cdIg',
  {
    name: 'Destroyer Caps',
    instagram: 'https://www.instagram.com/destroyer_caps/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
