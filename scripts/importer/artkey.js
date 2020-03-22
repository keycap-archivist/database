const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "1piD-uC3eAwy0dkqxnsZoYr_-AnezmelpFnHfuK3RslM"
  );
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  const catalog = {
    id: genId("Artkey"),
    name: "Artkey",
    instagram: "https://www.instagram.com/artkey.universe/",
    website: "https://artkeyuniverse.com/",
    sculpts: []
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("artkey.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
