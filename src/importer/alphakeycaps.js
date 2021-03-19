const htmlparser = require('node-html-parser');
const axios = require('axios');
const { launcher } = require('../utils');
const { genId, sortBy } = require('../utils');

const catalogsName = [
  'keypora',
  'jedi-blinker',
  'blinker',
  'matapora',
  'alpha-ape',
  'cherep',
  'salvador',
  'mr-worldwide',
];
const BASE_URL = 'https://alphakeycaps.com/';

async function CatalogParse(catName) {
  const html = await axios.get(`${BASE_URL}${catName}`).then((res) => res.data);
  const root = htmlparser.parse(html);
  const colorways = root.querySelectorAll('.intrinsic').map((e) => {
    const name = e.querySelector('.image-caption').querySelector('p').querySelector('strong').childNodes[0].rawText;
    const rawImg = e.querySelector('.thumb-image').rawAttrs;
    const m = /data-src="(.*?)"/.exec(rawImg);
    const imgsrc = m[1];
    const re = new RegExp(catName.replace('-', ' '), 'gi');
    return { name: name.replace(re, '').trim(), img: imgsrc, id: genId(imgsrc) };
  });
  return colorways;
}

async function GenSculpt(catname, sculptsArray) {
  const s = {
    name: catname.replace('-', ' '),
    id: genId(`alpha-keycaps-${catname}`),
    colorways: await CatalogParse(catname),
  };
  sculptsArray.push(s);
}

async function scrap() {
  try {
    const catalog = {
      id: genId('Alpha Keycaps'),
      name: 'Alpha Keycaps',
      src: 'https://alphakeycaps.com/',
      instagram: 'https://www.instagram.com/alphakeycaps/',
      website: 'https://alphakeycaps.com',
      discord: 'https://discord.com/invite/eBVaYwn',
      sculpts: [],
    };
    for (const c of catalogsName) {
      await GenSculpt(c, catalog.sculpts);
    }
    catalog.sculpts = sortBy(catalog.sculpts, 'name');
    return catalog;
  } catch (e) {
    return {
      name: 'Alpha Keycaps',
      hasError: true,
      error: e,
    };
  }
}

launcher(scrap);

module.exports = {
  scrap,
};
