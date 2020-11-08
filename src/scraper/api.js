const axios = require('axios');
const { genId, sortBy } = require('../utils');

function scrapFrom(catalogURL, meta = {}) {
  if (catalogURL === undefined) {
    throw new Error('Missing Catalog URL');
  }
  if (meta.name === undefined) {
    throw new Error(`Missing name in metadata for "${catalogURL}"`);
  }
  return async function scrap() {
    const data = await axios.get(catalogURL).then((res) => res.data);
    const catalog = {
      src: catalogURL,
      id: '',
      name: '',
      instagram: '',
      website: '',
      discord: '',
      selfOrder: false,
      sculpts: [],
      ...data,
      ...meta,
    };
    catalog.id = genId(catalog.name);
    catalog.sculpts = sortBy(catalog.sculpts, 'name');
    catalog.sculpts = catalog.sculpts.map((sculpt) => {
      const newSculpt = { ...sculpt };
      newSculpt.id = genId(sculpt.name);
      newSculpt.colorways = sculpt.colorways.map((colorway) => {
        const newColorway = { ...colorway };
        newColorway.id = genId(colorway.name);
        newColorway.releaseDate = new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(
          new Date(colorway.releaseDate * 1000),
        );
        return newColorway;
      });
      return newSculpt;
    });
    return catalog;
  };
}

module.exports = {
  scrapFrom,
};
