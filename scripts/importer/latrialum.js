const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "1crfV15xlpsIIfDxo0PGoEE40ZZfMUkl4JOZO_d1sILY"
  );
  const catalog = {
    id: genId("Latrialum"),
    name: "Latrialum",
    instagram: "https://www.instagram.com/latrialum/",
    website: "",
    sculpts: []
  };
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  tabs.pop();
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("latrialum.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
