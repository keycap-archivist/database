const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "1r_RNJJW5uagd8SL47-c_b_lvb2TuxBsqU6zJhFzs2Vk"
  );
  const catalog = {
    id: genId("Hello Caps"),
    name: "Hello Caps",
    instagram: "https://www.instagram.com/hello__caps/",
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
    fs.writeFileSync("hello.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
