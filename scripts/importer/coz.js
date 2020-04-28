const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "14EBfRe0AxEbCok856_HrL6teQAlkeQL3kpa3z8lenTc"
  );
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  tabs.pop(); // credit
  const catalog = {
    id: genId("CozCaps"),
    name: "CozCaps",
    instagram: "https://www.instagram.com/cozkeycaps/",
    website: "https://www.cozcaps.com/",
    sculpts: []
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("coz.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
