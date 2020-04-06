const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "18jTzayNzUDECKOfe-ZXa6oDucNj8_Pp0jEjsdzvvSws"
  );
  const catalog = {
    id: genId("KeyKollectiv"),
    name: "KeyKollectiv",
    instagram: "https://www.instagram.com/keykollectiv/",
    website: "https://www.keykollectiv.com/",
    sculpts: []
  };
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("keykollectiv.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
