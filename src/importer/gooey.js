const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { genId, sortBy } = require('../utils');

const CATALOG_JSON_URL = 'https://gooey.link/keycap-archivist.json';
const ARTISAN_NAME = 'Gooey Keys';
const ARTISAN_NAME_KEBAB_CASE = 'gooey-keys';
const USE_PROVIDED_SORTING = true;

async function scrap() {
  try {
    const catalog = await axios.get(CATALOG_JSON_URL).then((res) => res.data);

    // Generate a unique ID for the catalog
    catalog.id = genId(ARTISAN_NAME);

    // Generate unique IDs for each sculpt
    for (const sculpt of catalog.sculpts) {
      sculpt.id = genId(`${ARTISAN_NAME_KEBAB_CASE}-${sculpt.name}`);
      
      if(!USE_PROVIDED_SORTING) {
        sculpt.colorways = sortBy(sculpt.colorways, 'name');
      }

      // Generate unique IDs for each colorway
      for (const colorway of sculpt.colorways) {
        colorway.id = genId(colorway.img);
      }
    }
    
    if(!USE_PROVIDED_SORTING) {
      catalog.sculpts = sortBy(catalog.sculpts, 'name');
    }

    return catalog;

  } catch (e) {
    return {
      name: ARTISAN_NAME,
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
