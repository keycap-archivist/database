const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "1NDxNP0oKZOGW_13FrXevtgagTYmgHTGn66V7MYf7sx0"
  );
  const catalog = {
    id: genId("Sludgekidd"),
    name: "Sludgekidd",
    instagram: "https://www.instagram.com/sludgekidd/",
    website: "https://www.sludgekidd.design/",
    sculpts: []
  };
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("sludgekidd.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
