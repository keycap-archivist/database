const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "1QXedbahyT1FndM9QdxZ8HC0RshpbyCvChTuQTY688lE"
  );
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  const catalog = {
    id: genId("Kaphaus"),
    name: "Kaphaus",
    instagram: "https://www.instagram.com/the.kaphaus/",
    website: "https://geekhack.org/index.php?topic=85295.0",
    sculpts: []
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("kaphaus.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
