// @ts-nocheck
const scraps = [
  "./nightcaps",
  "./alphakeycaps",
  "./deathcaps",
  "./backward",
  "./boomsnap",
  "./boop",
  "./coz",
  "./clack",
  "./gsk",
  "./nubbinator",
  "./badhabit",
  "./ritual",
  "./kaphaus",
  "./cyo",
  "./kbk",
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
  "./tiny",
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

function report(catalog) {
  let colorwayCount = 0;
  let sculptCount = 0;
  console.log("Artisan DB Generation");
  console.log("---------------------");
  console.log("");
  for (const a of catalog) {
    console.log("");
    console.log(`- ${a.name}`);
    sculptCount += a.sculpts.filter((x) => x !== null).length;
    for (const s of a.sculpts.filter((x) => x !== null)) {
      console.log(`---- ${s.name} : ${s.colorways.length} colorways`);
      colorwayCount += s.colorways.length;
    }
  }
  console.log("");
  console.log("-----------------");
  console.log(`Artists   : ${catalog.length}`);
  console.log(`Sculpts   : ${sculptCount}`);
  console.log(`Colorways : ${colorwayCount}`);

  let tpl = fs.readFileSync(path.join(__dirname, "..", "..", "README.md.tpl"), "utf-8");
  tpl = tpl
    .replace("<artistCount>", catalog.length)
    .replace("<sculptCount>", sculptCount)
    .replace("<colorwayCount>", colorwayCount);
  fs.writeFileSync(path.join(__dirname, "..", "..", "README.md"), tpl);
}

async function main() {
  const p = [];
  for (const s of scraps) {
    // Google Api limit parallel requests
    // needs too add pooling
    p.push(await moduleScrap(s));
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
  report(catalog);
}

main()
  .then(() => {
    console.log("Generation finished");
  })
  .catch((e) => {
    console.log("An error has occured");
    console.error(e);
    process.exit(1);
  });
