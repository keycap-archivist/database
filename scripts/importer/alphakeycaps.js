const htmlparser = require("node-html-parser");
const axios = require("axios");
const fs = require("fs");

async function scrap() {
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
    // const filename = formatFilename(name, imgsrc);
    return { name: name, img: imgsrc };
  });
  return { keypora: colorways };
}

if (require.main === module) {
  scrap().then(catalog => {
    fs.writeFileSync("alphakeycaps.json", JSON.stringify(catalog));
  });
}

module.exports = {
  name: "Alpha Keycaps",
  scrap
};
