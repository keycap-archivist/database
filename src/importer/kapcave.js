const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { genId, sortBy } = require('../utils');

const BASE_URL = 'https://kapcave.nachie.com/api/v1/catalog/list';

async function scrap() {
  try {
    const catalog = await axios.get(`${BASE_URL}`).then((res) => res.data);
    catalog.id = genId('KapCave');
    for (const c of catalog.sculpts) {
     c.id = genId(`KapCave-${c.name}`);
     for (const colorway of c.colorways) {
         colorway.id = genId(colorway.img);
     }
    }
    catalog.sculpts = sortBy(catalog.sculpts, 'name');
    return catalog;
  } catch (e) {
    return {
      name: 'KapCave',
      hasError: true,
      error: e,
    };
  }
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync(`${path.basename(__filename, path.extname(__filename))}.json`, JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
