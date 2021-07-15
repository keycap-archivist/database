const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1ehAQBiLvDzM6FUqAKxP2kpJFEQaDnq3yR75TuM0L8vY', {
  name: 'Blank Works',
  instagram: 'https://www.instagram.com/blank.works01/',
});

launcher(scrap);

module.exports = {
  scrap,
};
