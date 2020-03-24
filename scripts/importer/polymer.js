const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "16FowOOELHP9DmQ7rKdVmgvvEGEgiOhwDtxAA58IDJCg"
  );
  const catalog = {
    id: genId("Polymer Salon"),
    name: "Polymer Salon",
    instagram: "https://www.instagram.com/fendentkeys/",
    website: "https://geekhack.org/index.php?topic=85461.0",
    sculpts: []
  };
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("polymer.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
