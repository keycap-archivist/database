const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1kZoXY-9rV25G5cSwgQxAHwmcjVXNL_LUj8vxhmYYk7k', {
  name: 'Tokkipee',
  instagram: 'https://www.instagram.com/tokkipee/',
  website: 'https://tokkipee.com',
});

launcher(scrap);

module.exports = {
  scrap,
};
