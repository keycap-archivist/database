const scraps = [
  "./nightcaps",
  "./alphakeycaps",
  "./deathcaps",
  "./badhabit",
  "./ritual",
  "./cyo",
  "./binge",
  "./artkey",
  "./fraktal",
  "./keykollectiv",
  "./polymer",
  "./latrialum",
  "./level",
  "./bludgeoned",
  "./tokkipee",
  "./keyforge",
  "./bad",
  "./jak",
  "./prime",
  "./bro",
  "./sodie",
  "./hello",
  "./sludgekidd",
  "./wildstory",
  "./gaf",
];
const fs = require("fs");
const stringify = require("csv-stringify/lib/sync");
const path = require("path");
const DEST = path.resolve(path.join(__dirname, "..", "..", "db"));
const DESTINATION_JSON = path.join(DEST, "catalog.json");
const DESTINATION_CSV = path.join(DEST, "catalog.csv");
let catalog = [];

function flatten() {
  const arr = [];
  const outArtist = {};
  for (const artist in Object.keys(catalog).sort()) {
    const artistArr = [];
    for (const sculpt in catalog[artist].sculpts) {
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

async function moduleScrap(moduleName) {
  const m = require(moduleName);
  const _catalog = await m.scrap();
  catalog.push(_catalog);
  fs.writeFileSync(path.join(DEST, `${_catalog.name.toLowerCase().replace(/ /g, "-")}.json`), JSON.stringify(_catalog));
}

async function main() {
  const p = [];
  for (const s of scraps) {
    p.push(moduleScrap(s));
  }
  await Promise.all(p);
  catalog = catalog.sort(function (a, b) {
    const textA = a.name.toUpperCase();
    const textB = b.name.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
  const flattennedCatalog = flatten();
  fs.writeFileSync(DESTINATION_JSON, JSON.stringify(catalog));
  fs.writeFileSync(DESTINATION_CSV, stringify(flattennedCatalog.full, { header: true }));
  for (const a in flattennedCatalog.artist) {
    fs.writeFileSync(
      path.join(DEST, `${flattennedCatalog.artist[a][0].artist.toLowerCase().replace(/ /g, "-")}.csv`),
      stringify(flattennedCatalog.artist[a], { header: true })
    );
  }
}

main();
