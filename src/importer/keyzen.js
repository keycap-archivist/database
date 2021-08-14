const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom('1YljdTx25HavIPtY4ZFNWT1eULVTbCS-i1bUYjEVjwU4', {
  name: 'Keyzen',
  instagram: 'https://www.instagram.com/keyzencaps',
  website: 'http://www.keyzen.art',
  discord: 'https://discord.gg/yv22JX2Byz',
});

launcher(scrap);

module.exports = {
  scrap,
};
