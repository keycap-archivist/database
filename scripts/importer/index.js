const scraps = ["./nightcaps", "./alphakeycaps", "./deathcaps", "./ritual"];
const fs = require("fs");
const stringify = require("csv-stringify/lib/sync");
const path = require("path");
const DESTINATION_JSON = path.resolve(
  path.join(__dirname, "..", "..", "db", "catalog.json")
);
const DESTINATION_CSV = path.resolve(
  path.join(__dirname, "..", "..", "db", "catalog.csv")
);
const catalog = {};

function flatten() {
  const arr = [];
  for (const artist in catalog) {
    for (const sculpt in catalog[artist]) {
      catalog[artist][sculpt].forEach(s => {
        arr.push({
          artist,
          sculpt,
          name: s.name,
          img: s.img
        });
      });
    }
  }
  return arr;
}

async function main() {
  for (const s of scraps) {
    const m = require(s);
    catalog[m.name] = await m.scrap();
  }
  fs.writeFileSync(DESTINATION_JSON, JSON.stringify(catalog));
  fs.writeFileSync(DESTINATION_CSV, stringify(flatten(), { header: true }));
}

main();
