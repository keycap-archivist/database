const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile("1rCP_Nn_PQeMiqsFlJ2_8TvFHFPsTpq90-QPgDBo7H40");
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  tabs.shift();
  const catalog = {
    id: genId("Goldenstar Keycap"),
    name: "Goldenstar Keycap",
    instagram: "https://www.instagram.com/goldenstar_keycap/",
    website: "https://goldenstarkeycaps.com/",
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync("gsk.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
