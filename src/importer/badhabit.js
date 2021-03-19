const { scrapFrom } = require('../scraper/gdoc');
const { launcher } = require('../utils');

const scrap = scrapFrom(
  '1MUoyBLW1slC819V1IdDa2eAV5adU2IHGa5YjmFY5w88',
  {
    name: 'Bad Habit Caps',
    instagram: 'https://www.instagram.com/bad.habit.caps/',
    website: 'https://badhabitcaps.com/',
    discord: 'https://discord.com/invite/H5rkNechrB',
  },
  ['pop'],
);

launcher(scrap);

module.exports = {
  scrap,
};
