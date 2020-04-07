const fs = require("fs");
const htmlparser = require("node-html-parser");
const { downloadFile, genId, gDriveParse } = require("./utils");

async function scrap() {
  const index = await downloadFile(
    "1MUoyBLW1slC819V1IdDa2eAV5adU2IHGa5YjmFY5w88"
  );
  const rootNode = htmlparser.parse(index);
  const tabs = rootNode.querySelectorAll("table");
  tabs.pop(); // credit
  const catalog = {
    id: genId("Bad Habit Caps"),
    name: "Bad Habit Caps",
    instagram: "https://www.instagram.com/bad.habit.caps/",
    website: "",
    sculpts: []
  };
  return gDriveParse(catalog, tabs);
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("badhabit.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
