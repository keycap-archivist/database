const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('14VMtz60UJoIfm-Lq66lqJjpwwofk4ZlREq4JKSMEFPo', {
  name: 'Captomaniacs',
  instagram: 'https://www.instagram.com/captomaniacs/',
});

launcher(scrap);

module.exports = {
  scrap,
};
