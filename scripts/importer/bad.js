const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "15OgzFWmOJWM5h0JBMV85041Vjd88lNXfj6cWkwd-BFM"
  );
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  tabs.pop(); // credit
  const catalog = {
    id: genId("Bad and Booj Keys"),
    name: "Bad and Booj Keys",
    instagram: "https://www.instagram.com/badch4d/",
    website: "",
    sculpts: []
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("bad.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
