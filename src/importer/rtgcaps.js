const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1XNeLhAdqfwbgmpm4qbN9nUFQzLktN0JiEJGgRVCEnpk',
  {
    name: 'rtg_caps_',
    instagram: 'https://www.instagram.com/rtg_caps_/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
