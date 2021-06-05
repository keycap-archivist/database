const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1Gb0HeMF0jE8wfN6sUJEsVRcWjC88VmWJQnABIKEv28o', {
  name: 'meof',
  instagram: 'https://www.instagram.com/meof.caps',
  website: 'https://www.meof-studio.com/',
});

launcher(scrap);

module.exports = {
  scrap,
};
