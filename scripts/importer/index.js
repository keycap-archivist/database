const scraps = [
  "./nightcaps",
  "./alphakeycaps",
  "./deathcaps",
  "./ritual",
  "./artkey",
  "./gaf"
];
const fs = require("fs");
const stringify = require("csv-stringify/lib/sync");
const path = require("path");
const DEST = path.resolve(path.join(__dirname, "..", "..", "db"));
const DESTINATION_JSON = path.join(DEST, "catalog.json");
const DESTINATION_CSV = path.join(DEST, "catalog.csv");
const catalog = {};

function flatten() {
  const arr = [];
  const outArtist = {};
  for (const artist in catalog) {
    const artistArr = [];
    for (const sculpt in catalog[artist]) {
      catalog[artist][sculpt].forEach(s => {
        const out = {
          id: s.id,
          artist,
          sculpt,
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
    catalog[m.name] = await m.scrap();
    fs.writeFileSync(
      path.join(DEST, `${m.name.toLowerCase().replace(/ /g, "-")}.json`),
      JSON.stringify(catalog[m.name])
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
      path.join(DEST, `${a.toLowerCase().replace(/ /g, "-")}.csv`),
      stringify(flattennedCatalog.artist[a], { header: true })
    );
  }
}

main();
