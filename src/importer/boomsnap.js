const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1Uj-JdFhGKaEhKw7-O3HGzzrNctD1c4a8zwC6lezk9nQ',
  {
    id: 'BoomSnap! Caps',
    name: 'BoomSnap Caps',
    instagram: 'https://www.instagram.com/boomsnapcaps/',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
