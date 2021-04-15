const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1dCtWhW9ng-IgVFi-98HyglVmfVLIqiFN6w8u5-0EU4E',
  {
    name: 'Rubrehose',
    instagram: 'https://www.instagram.com/rubrehose/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
