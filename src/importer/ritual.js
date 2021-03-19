const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1ou0Nk0lPbYXwOHdAOOI9UgbIQHwzd7l3XidY9WK9E7w',
  {
    name: 'Ritual Master',
    instagram: 'https://www.instagram.com/ritualmaster/',
    website: 'https://www.ritual-master.com/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
