const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "1UGadEUhjZ-wyVywIb1-Qwpd32jPkobNaYisQTuJG-wQ"
  );
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  tabs.pop(); // credit
  const catalog = {
    id: genId("Hunger Work Studios"),
    name: "Hunger Work Studioss",
    instagram: "https://www.instagram.com/hungerworkstudio/",
    website: "https://hungerwork.studio/",
    sculpts: []
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("binge.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
