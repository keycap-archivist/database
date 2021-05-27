const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1V0lB6MTcTkSoClOEakYI57sAI6xOThP9diEwCCQLR1c', {
  name: 'Psycho Keycaps',
  instagram: 'https://www.instagram.com/psychokeycaps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
