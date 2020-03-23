const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  let index = await downloadFile(
    "1SLiSnTXJXR6X5jT5VnmAe4e3K2yFgZosxBUY1kQQKwo"
  );
  fs.writeFileSync("indexbro.html", index);
  const rootNode = htmlparser.parse(index);

  let tabs = rootNode.querySelectorAll("table");
  // remove this ugly betrayer because WOW is damn a shitty game
  // Problem wiv dat u n00b?
  tabs[32 * 2] = null;
  tabs = tabs.filter(x => x !== null);
  tabs.pop();
  const catalog = {
    id: genId("Bro Caps"),
    name: "Bro Caps",
    instagram: "https://www.instagram.com/bro_caps/",
    website: "",
    sculpts: []
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("bro.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
