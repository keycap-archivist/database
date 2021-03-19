const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1_wtEVliorr29dTkO7NHHBkM3fu80V_rU6eJKMVwd8qQ',
  {
    name: 'Zorbcaps',
    instagram: 'https://www.instagram.com/zorbcaps/',
    website: 'https://www.zorbcaps.com/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
