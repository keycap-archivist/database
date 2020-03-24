const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "1R2dHjC3M2dab4_pMVnc-ti11gazoD42Lqknjm5EW2R0"
  );
  const catalog = {
    id: genId("SodieCaps"),
    name: "SodieCaps",
    instagram: "https://www.instagram.com/sodiecaps/",
    website: "http://sodiecaps.com/",
    sculpts: []
  };
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("sodie.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
