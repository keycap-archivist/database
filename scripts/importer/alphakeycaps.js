const htmlparser = require("node-html-parser");
const axios = require("axios");
const fs = require("fs");
const { genId } = require("./utils");

async function scrap() {
  const catalog = {
    id: genId("Alpha Keycaps"),
    name: "Alpha Keycaps",
    instagram: "https://www.instagram.com/alphakeycaps/",
    website: "https://alphakeycaps.com",
    sculpts: [{ name: "keypora", colorways: [] }]
  };
  const url = "https://alphakeycaps.com/keypora";
  const html = await axios.get(url).then(res => {
    return res.data;
  });
  const root = htmlparser.parse(html);
  const colorways = root.querySelectorAll(".intrinsic").map(e => {
    const name = e
      .querySelector(".image-caption")
      .querySelector("p")
      .querySelector("strong").childNodes[0].rawText;
    const rawImg = e.querySelector(".thumb-image").rawAttrs;
    const m = /data-src="(.*?)"/.exec(rawImg);
    const imgsrc = m[1];
    return { name: name, img: imgsrc, id: genId(imgsrc) };
  });
  catalog.sculpts[0].colorways = colorways;
  return catalog;
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("alphakeycaps.json", JSON.stringify(catalog));
  });
}

module.exports = {
  scrap
};
