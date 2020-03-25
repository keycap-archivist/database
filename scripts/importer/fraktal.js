const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "13LmVzCkuN7uGhair0QXq1sJkI7LK6jBs-uhnVU-hDII"
  );
  const catalog = {
    id: genId("Fraktal Kaps"),
    name: "Fraktal Kaps",
    instagram: "https://www.instagram.com/fraktal.kaps/",
    website: "https://fraktalkaps.com/",
    sculpts: []
  };
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  tabs.pop();
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("fraktalkaps.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
