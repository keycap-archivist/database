const htmlparser = require('node-html-parser');
const axios = require('axios');
const fs = require('fs');
const { genId } = require('./utils');

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
  const catalog = {
    id: genId('Alpha Keycaps'),
    name: 'Alpha Keycaps',
    src: 'https://alphakeycaps.com/',
    instagram: 'https://www.instagram.com/alphakeycaps/',
    website: 'https://alphakeycaps.com',
    sculpts: [],
  };
  const p = [];
  for (const c of catalogsName) {
    p.push(GenSculpt(c, catalog.sculpts));
  }
  await Promise.all(p);
  catalog.sculpts = catalog.sculpts.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  return catalog;
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync('alphakeycaps.json', JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
