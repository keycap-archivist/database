const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1ceCQ48nyCfZ2u0jnzgnvVW0nuxd01a0QS48cx_TVh-U', {
  name: 'MelonKeys',
  instagram: 'https://www.instagram.com/melonkeys.keycaps',
  website: 'https://www.melonkeys.com',
  discord: 'https://discord.com/invite/WMJhYbr',
});

launcher(scrap);

module.exports = {
  scrap,
};
