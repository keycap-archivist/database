const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1CzwP-Zj8cLVvMdQRJqDFL_kiZOaOHAcgp3F0owh4-nY',
  {
    name: 'Tech. Stoned. Amish.',
    instagram: 'https://www.instagram.com/techstonedamish/',
  },
  [],
);

launcher(scrap);

module.exports = {
  scrap,
};
