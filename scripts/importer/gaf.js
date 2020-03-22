const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "1AdPXkALzPErnyMQZrWDJ6o-jCvFB34XeZyz00FDDvLY"
  );
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  tabs.pop(); // deleting last tab as it's credits
  const catalog = {
    id: genId("Grimey as Fuck"),
    name: "Grimey as Fuck",
    instagram: "https://www.instagram.com/gaf_caps/",
    website: "",
    sculpts: []
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("gaf.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
