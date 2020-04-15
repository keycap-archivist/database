const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile("1eHoHMjOIaZv57h3XgOfamgWaE4nfMbFKLj827XNKSac");
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  tabs.pop();
  const catalog = {
    id: genId("Backward Caps"),
    name: "Backward Caps",
    instagram: "https://www.instagram.com/backward.caps.sales/",
    website: "",
    sculpts: [],
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then((catalog) => {
    fs.writeFileSync("backward.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap,
};
