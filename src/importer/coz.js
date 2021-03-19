const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '14EBfRe0AxEbCok856_HrL6teQAlkeQL3kpa3z8lenTc',
  {
    name: 'CozCaps',
    instagram: 'https://www.instagram.com/cozkeycaps/',
    website: 'https://www.cozcaps.com/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
