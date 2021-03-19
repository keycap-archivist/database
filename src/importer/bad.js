const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '15OgzFWmOJWM5h0JBMV85041Vjd88lNXfj6cWkwd-BFM',
  {
    name: 'Bad and Booj Keys',
    instagram: 'https://www.instagram.com/badch4d/',
    website: 'https://www.badchad.work',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
