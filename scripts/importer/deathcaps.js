const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "1Y1Ip37QbnjNNiOYEAvbv9KVz9A74DFEufDDF22F1OvA"
  );
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  const catalog = {
    id: genId("Deathcaps"),
    name: "Deathcaps",
    instagram: "https://www.instagram.com/death_caps/",
    website: "",
    sculpts: []
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("deathcaps.json", JSON.stringify(catalog));
  });
}

module.exports = {
  name: "Deathcaps",
  scrap
};
