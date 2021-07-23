const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1AV5u4TtQY2iKOisKygGIn7IYFGzcqU9hhjqI76UzkbM', {
  name: 'Luna Keycaps',
  instagram: 'https://www.instagram.com/luna.keycaps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
