const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { genId, sortBy } = require('../../utils');

const CATALOG_JSON_URL = 'https://gooey.link/keycap-archivist.json';
const ARTISAN_NAME = 'Gooey Keys';
// Used for generating the catalog ID
// (useful if an existing catalog uses an ID that differs from the artisan's name)
const ARTISAN_ID = 'gooey keys';
// Used for generating sculpt IDs
const ARTISAN_NAME_KEBAB_CASE = 'gooey-keys';
// If false, sculpts & colorways will be sorted alphabetically
const USE_PROVIDED_SORTING = true;

async function scrap() {
  try {
    // Fetch the catalog's complete data, with the exception of the unique IDs
    // for the catalog, sculpts and colorways
    const catalog = await axios.get(CATALOG_JSON_URL).then((res) => res.data);

    // Generate a unique ID for the catalog
    catalog.id = genId(ARTISAN_ID);

    // Generate unique IDs for each sculpt
    for (const sculpt of catalog.sculpts) {
      sculpt.id = genId(`${ARTISAN_NAME_KEBAB_CASE}-${sculpt.name}`);

      if (!USE_PROVIDED_SORTING) {
        sculpt.colorways = sortBy(sculpt.colorways, 'name');
      }

      // Generate unique IDs for each colorway
      for (const colorway of sculpt.colorways) {
        colorway.id = genId(colorway.img);
      }
    }

    if (!USE_PROVIDED_SORTING) {
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
