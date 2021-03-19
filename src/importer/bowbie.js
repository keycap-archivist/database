const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1CyKhBbny0xMHcbHtdFQC_P0nrczYOpYdz3KV6ujdPnc', {
  name: 'Bowbie',
  instagram: 'https://www.instagram.com/bowbie.keycaps/',
  discord: 'https://discord.com/invite/NFywSSkhjY',
});

launcher(scrap);

module.exports = {
  scrap,
};
