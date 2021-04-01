const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1VpFhfYEekz9x2Oe02FAlw8xYVmisHkmrt2NxCxDHdxw', 
  {
    name: 'HungryHustlas',
    instagram: 'https://www.instagram.com/hungryhustlas',
  },
);

launcher(scrap);

module.exports = {
  scrap,
};
