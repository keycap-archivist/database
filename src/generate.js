/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const PromisePool = require('@mixmaxhq/promise-pool');
const fs = require('fs');
const stringify = require('csv-stringify/lib/sync');
const path = require('path');

const DEST = path.resolve(path.join(__dirname, '..', 'db'));
const DESTINATION_JSON = path.join(DEST, 'catalog.json');
const DESTINATION_CSV = path.join(DEST, 'catalog.csv');
const importerPath = path.resolve(path.join(__dirname, 'importer'));

function flatten(catalog) {
  const arr = [];
  const outArtist = {};
  for (const artist in Object.keys(catalog).sort()) {
    const artistArr = [];
    for (const sculpt in catalog[artist].sculpts) {
      // eslint-disable-next-line no-loop-func
      catalog[artist].sculpts[sculpt].colorways.forEach((s) => {
        const out = {
          id: s.id,
          artist: catalog[artist].name,
          sculpt: catalog[artist].sculpts[sculpt].name,
          name: s.name,
          img: s.img,
        };
        arr.push(out);
        artistArr.push(out);
      });
      outArtist[artist] = artistArr;
    }
  }
  return { full: arr, artist: outArtist };
}

async function moduleScrap(catalog, moduleName) {
  const m = require(moduleName);
  const moduleCatalog = await m.scrap();
  catalog.push(moduleCatalog);
  fs.writeFileSync(
    path.join(DEST, `${moduleCatalog.name.toLowerCase().replace(/[ .]/g, '-')}.json`),
    JSON.stringify(moduleCatalog),
  );
}

function report(catalog) {
  let colorwayCount = 0;
  let sculptCount = 0;
  const srcTab = [];
  console.log('Artisan DB Generation');
  console.log('---------------------');
  console.log('');
  for (const a of catalog) {
    srcTab.push(`| ${a.name} | [link](${a.src}) |`);
    console.log('');
    console.log(`- ${a.name}`);
    sculptCount += a.sculpts.filter((x) => x !== null).length;
    for (const s of a.sculpts.filter((x) => x !== null)) {
      console.log(`---- ${s.name} : ${s.colorways.length} colorways`);
      colorwayCount += s.colorways.length;
    }
  }
  console.log('');
  console.log('-----------------');
  console.log(`Artists   : ${catalog.length}`);
  console.log(`Sculpts   : ${sculptCount}`);
  console.log(`Colorways : ${colorwayCount}`);

  let tpl = fs.readFileSync(path.join(__dirname, '..', 'templates', 'README.md'), 'utf-8');
  tpl = tpl
    .replace('<artistCount>', catalog.length)
    .replace('<sculptCount>', sculptCount)
    .replace('<colorwayCount>', colorwayCount)
    .replace('<srcCatalogs>', srcTab.join('\n'));
  fs.writeFileSync(path.join(__dirname, '..', 'README.md'), tpl);
}

async function main() {
  let catalog = [];
  const pool = new PromisePool({ numConcurrent: 8 });
  const scraps = fs.readdirSync(importerPath);
  for (const s of scraps) {
    await pool.start(
      async (cat, filename) => {
        await moduleScrap(cat, path.join(importerPath, filename));
      },
      catalog,
      s,
    );
  }
  const errors = await pool.flush();
  if (errors.length) {
    console.log('Database has not been properly generated');
    console.log('ERRORS:');
    console.log(errors);
    throw new Error('Error during DB generation');
  }
  catalog = catalog.sort((a, b) => {
    const textA = a.name.toUpperCase();
    const textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
  const flattennedCatalog = flatten(catalog);
  fs.writeFileSync(DESTINATION_JSON, JSON.stringify(catalog));
  fs.writeFileSync(DESTINATION_CSV, stringify(flattennedCatalog.full, { header: true }));
  for (const a in flattennedCatalog.artist) {
    fs.writeFileSync(
      path.join(DEST, `${flattennedCatalog.artist[a][0].artist.toLowerCase().replace(/[ .]/g, '-')}.csv`),
      stringify(flattennedCatalog.artist[a], { header: true }),
    );
  }
  report(catalog);
}

main()
  .then(() => {
    console.log('Generation finished');
  })
  .catch((e) => {
    console.log('An error has occured');
    console.error(e);
    process.exit(1);
  });
