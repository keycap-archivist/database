const fs = require("fs");
const htmlparser = require("node-html-parser");
const path = require("path");
const { downloadFile } = require("./googleApi");

async function scrap() {
  const index = await downloadFile(
    "1GpFn7f6xb2hF0REHKe4ts2wUeHR5CLX8yUMAqSlGW0k"
  );
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  tabs.pop(); // deleting last tab as it's credits
  let currentSculpt = "";
  const catalog = {};
  for (let idx = 0; idx < tabs.length; idx++) {
    const element = tabs[idx];
    if (idx % 2 === 0) {
      let sculptName = element.querySelector("span").childNodes[0].rawText;
      sculptName = sculptName
        .replace(/\&rdquo;/g, "'")
        .replace(/\&ldquo;/g, "'");
      if (sculptName !== currentSculpt) {
        currentSculpt = sculptName;
      }
    } else {
      element.querySelectorAll("td").forEach(e => {
        if (e.text.trim() !== "") {
          let img = "";
          if (!catalog[currentSculpt]) {
            catalog[currentSculpt] = [];
          }
          if (e.querySelector("img")) {
            img = e.querySelector("img").rawAttributes.src;
          }
          catalog[currentSculpt].push({
            name: e.text,
            img: img
          });
        }
      });
    }
  }
  return catalog;
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("etf.json", JSON.stringify(catalog));
  });
}

module.exports = {
  name: "Nightcaps",
  scrap
};
