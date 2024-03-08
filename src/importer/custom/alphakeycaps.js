const htmlparser = require('node-html-parser')
const axios = require('axios')
const { genId, sortBy, launcher } = require('../../utils')

const catalogs = {
  'darth-looga': 'Darth Looga',
  'mf-belooga': 'MF Belooga',
  keypora: 'Keypora',
  'jedi-blinker': 'Jedi Blinker',
  blinker: 'Blinker',
  matapora: 'Matapora',
  'alpha-ape': 'Alpha Ape',
  cherep: 'Cherep',
  salvador: 'Salvador',
  albison: 'Albison',
  'mr-worldwide': 'Mr Worldwide',
  'boosted-gamer-set': 'Boosted Gamer Set',
  geekpora: 'Geekpora',
  prayge: 'Prayge',
  devoura: 'Devoura',
  lickely: 'Lickely',
  tut: 'Tut',
}

const BASE_URL = 'https://alphakeycaps.com/'

async function CatalogParse (catId) {
  const html = await axios.get(`${BASE_URL}${catId}`).then((res) => res.data)
  const root = htmlparser.parse(html)
  const colorways = root.querySelectorAll('.intrinsic').map((e) => {
    const name = e.querySelector('.image-caption').querySelector('p').querySelector('strong').childNodes[0].rawText
    const rawImg = e.querySelector('.image-block-wrapper img').rawAttrs
    const m = /data-src="(.*?)"/.exec(rawImg)
    const imgsrc = m[1]
    const re = new RegExp(catId.replace('-', ' '), 'gi')
    return { name: name.replace(re, '').trim(), img: imgsrc, id: genId(imgsrc) }
  })
  return colorways
}

async function GenSculpt ([catId, catName], sculptsArray) {
  const s = {
    name: catName,
    id: genId(`alpha-keycaps-${catId}`),
    colorways: await CatalogParse(catId)
  }
  sculptsArray.push(s)
}

async function scrap () {
  try {
    const catalog = {
      id: genId('Alpha Keycaps'),
      name: 'Alpha Keycaps',
      src: 'https://alphakeycaps.com/',
      instagram: 'https://www.instagram.com/alphakeycaps/',
      website: 'https://alphakeycaps.com',
      discord: 'https://discord.com/invite/eBVaYwn',
      artisanCollector: 'https://artisancollector.com/alpha-keycaps/',
      denySubmission: true,
      sculpts: []
    }
    for (const cat of Object.entries(catalogs)) {
      await GenSculpt(cat, catalog.sculpts)
    }
    catalog.sculpts = sortBy(catalog.sculpts, 'name')
    return catalog
  } catch (e) {
    return {
      name: 'Alpha Keycaps',
      hasError: true,
      error: e
    }
  }
}

launcher(scrap)

module.exports = {
  scrap
}
