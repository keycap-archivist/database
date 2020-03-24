const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "15c2a6DnBQPJbnVhbjH54KIKVr_I-twb7EQgXB37GAlM"
  );
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  tabs.pop(); // deleting last tab as it's credits
  const catalog = {
    id: genId("Just Another Keymaker"),
    name: "Just Another Keymaker",
    instagram: "https://www.instagram.com/justanotherkeymaker/",
    website: "https://www.keymaker.space/",
    sculpts: []
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("jak.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
