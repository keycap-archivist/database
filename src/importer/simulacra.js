const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1tY7twR6E65afan23BediwbxwvsjJqXtleE949r5mNeg', {
  id: 'Simulacra',
  name: 'Simulacra Caps',
  instagram: 'https://www.instagram.com/simulacra_caps/',
});

launcher(scrap);

module.exports = {
  scrap,
};
