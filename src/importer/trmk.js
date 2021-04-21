const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('19r0FNbI7cLrjogfDviC7WT2HkuRax9RmPZwn3B_DNOY', {
  name: 'trmk',
  instagram: 'https://www.instagram.com/trmkcaps/',
  website: 'https://trmkcaps.com/',
  discord: 'https://discord.com/invite/YrV6axHHze',
});

launcher(scrap);

module.exports = {
  scrap,
};
