const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "17Zb-LmujFdcnOZ2_VFhoPHKP1gZJmzEKJH2fawFeqpk"
  );
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  tabs.pop(); // credit
  const catalog = {
    id: genId("TinyMakesThings"),
    name: "TinyMakesThings",
    instagram: "https://www.instagram.com/tinymakesthings/",
    website: "https://www.tinymakesthings.com/",
    sculpts: []
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("tiny.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
