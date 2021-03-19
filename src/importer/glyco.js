const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1SOtOKEBn8oUXnECK0_9-sJ5YBh6BijlbKB6CZsNEBbc',
  {
    name: 'Glyco Caps',
    instagram: 'https://www.instagram.com/glycocaps/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
