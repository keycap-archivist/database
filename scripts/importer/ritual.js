// 1Y1Ip37QbnjNNiOYEAvbv9KVz9A74DFEufDDF22F1OvA
const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "1ou0Nk0lPbYXwOHdAOOI9UgbIQHwzd7l3XidY9WK9E7w"
  );
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  tabs.pop(); // deleting last tab as it's credits
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
    fs.writeFileSync("ritual.json", JSON.stringify(catalog));
  });
}

module.exports = {
  name: "Ritual Master",
  scrap
};
