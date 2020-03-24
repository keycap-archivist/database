const scraps = [
  "./nightcaps",
  "./alphakeycaps",
  "./deathcaps",
  "./ritual",
  "./binge",
  "./artkey",
  "./bad",
  "./prime",
  "./bro",
  "./hello",
  "./sludgekidd",
  "./wildstory",
  "./gaf"
];
const fs = require("fs");
const stringify = require("csv-stringify/lib/sync");
const path = require("path");
const DEST = path.resolve(path.join(__dirname, "..", "..", "db"));
const DESTINATION_JSON = path.join(DEST, "catalog.json");
const DESTINATION_CSV = path.join(DEST, "catalog.csv");
const catalog = [];

function flatten() {
  const arr = [];
  const outArtist = {};
  for (const artist in catalog) {
    const artistArr = [];
    for (const sculpt in catalog[artist].sculpts) {
      catalog[artist].sculpts[sculpt].colorways.forEach(s => {
        const out = {
          id: s.id,
          artist: catalog[artist].name,
          sculpt: catalog[artist].sculpts[sculpt].name,
          name: s.name,
          img: s.img
        };
        arr.push(out);
        artistArr.push(out);
      });
      outArtist[artist] = artistArr;
    }
  }
  return { full: arr, artist: outArtist };
}

async function main() {
  for (const s of scraps) {
    const m = require(s);
    const _catalog = await m.scrap();
    catalog.push(_catalog);
    fs.writeFileSync(
      path.join(DEST, `${_catalog.name.toLowerCase().replace(/ /g, "-")}.json`),
      JSON.stringify(_catalog)
    );
  }
  const flattennedCatalog = flatten();
  fs.writeFileSync(DESTINATION_JSON, JSON.stringify(catalog));
  fs.writeFileSync(
    DESTINATION_CSV,
    stringify(flattennedCatalog.full, { header: true })
  );
  for (const a in flattennedCatalog.artist) {
    fs.writeFileSync(
      path.join(
        DEST,
        `${flattennedCatalog.artist[a][0].artist
          .toLowerCase()
          .replace(/ /g, "-")}.csv`
      ),
      stringify(flattennedCatalog.artist[a], { header: true })
    );
  }
}

main();
