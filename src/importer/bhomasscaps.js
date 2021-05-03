const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1N8RgbXu7BVt1uXa38uyJMMQJ5FzqxgmvqktNpp9MA_Y',
  {
    name: 'Bhomass Caps',
    instagram: 'https://www.instagram.com/xspaceshit/',
  }
);

launcher(scrap);

module.exports = {
  scrap,
};