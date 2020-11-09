const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

const scrap = scrapFrom(
  '1ou0Nk0lPbYXwOHdAOOI9UgbIQHwzd7l3XidY9WK9E7w',
  {
    name: 'Ritual Master',
    instagram: 'https://www.instagram.com/ritualmaster/',
    website: 'https://www.ritual-master.com/',
  },
  ['pop'],
);

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
