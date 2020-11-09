const fs = require('fs');
const path = require('path');
const { scrapFrom } = require('../scraper/gdoc');

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

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
