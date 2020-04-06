const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile("1d-CVHj9vA0l-qQjYOFws6Wh9YPLSpCfFCwGDsmDLoJA");
  const catalog = {
    id: genId("KeyForge"),
    name: "KeyForge",
    instagram: "https://www.instagram.com/keyforge/",
    website: "https://www.keyforge.com/",
    sculpts: [],
  };
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync("keyforge.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
