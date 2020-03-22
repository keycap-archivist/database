const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "1Y1Ip37QbnjNNiOYEAvbv9KVz9A74DFEufDDF22F1OvA"
  );
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  let currentSculpt = "";
  const catalog = {};
  for (let idx = 0; idx < tabs.length; idx++) {
    const element = tabs[idx];
    if (idx % 2 === 0) {
      const sculptName = element.querySelector("span").childNodes[0].rawText;
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
            img: img,
            id: genId(img)
          });
        }
      });
    }
  }
  return catalog;
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("deathcaps.json", JSON.stringify(catalog));
  });
}

module.exports = {
  name: "Deathcaps",
  scrap
};
