const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "1Uj-JdFhGKaEhKw7-O3HGzzrNctD1c4a8zwC6lezk9nQ"
  );
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  tabs.pop(); // credit
  const catalog = {
    id: genId("BoomSnap! Caps"),
    name: "BoomSnap Caps",
    instagram: "https://www.instagram.com/boomsnapcaps/",
    website: "",
    sculpts: []
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("boomsnap.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
