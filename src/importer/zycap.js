const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1iFu8FhwjqIJSrweEA9ziazm0eD5rz3k3NgMtzIHzNw0', {
  name: 'Zy.cap',
  instagram: 'https://www.instagram.com/zy.cap',
  discord: 'https://discord.gg/ZWbdyssyxb',
});

launcher(scrap);

module.exports = {
  scrap,
};
