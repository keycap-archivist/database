const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "1ou0Nk0lPbYXwOHdAOOI9UgbIQHwzd7l3XidY9WK9E7w"
  );
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  tabs.pop(); // deleting last tab as it's credits
  const catalog = {
    id: genId("Ritual Master"),
    name: "Ritual Master",
    instagram: "https://www.instagram.com/ritualmaster/",
    website: "https://www.ritual-master.com/",
    sculpts: []
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("ritual.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
