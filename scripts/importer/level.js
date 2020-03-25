const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "1_9U5dSSCKeSQcBIhbHPigUs7jiF0AqNI0MYo5KNtpJ8"
  );
  const catalog = {
    id: genId("Level caps"),
    name: "Level caps",
    instagram: "https://www.instagram.com/level.caps/",
    website: "",
    sculpts: []
  };
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  tabs.pop();
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("level.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
