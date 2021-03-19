const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('18mc8abYoFIYDEqpvJzG5qYLXoQBTBUu9DUp7JSmIFxM', {
  name: 'Lividity',
  instagram: 'https://www.instagram.com/lividitycaps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
