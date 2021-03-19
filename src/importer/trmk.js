const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('19r0FNbI7cLrjogfDviC7WT2HkuRax9RmPZwn3B_DNOY', {
  name: 'trmk',
  instagram: 'https://www.instagram.com/trmkcaps/',
  website: 'https://geekhack.org/index.php?topic=101348.msg2780216#msg2780216',
});

launcher(scrap);

module.exports = {
  scrap,
};
