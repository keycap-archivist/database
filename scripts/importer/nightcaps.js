const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "1GpFn7f6xb2hF0REHKe4ts2wUeHR5CLX8yUMAqSlGW0k"
  );
  const catalog = {
    id: genId("Nightcaps"),
    name: "Nightcaps",
    instagram: "https://www.instagram.com/nightcaps.keycaps/",
    website: "https://geekhack.org/index.php?topic=79513.0",
    sculpts: []
  };
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  tabs.pop(); // deleting last tab as it's credits
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("etf.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
