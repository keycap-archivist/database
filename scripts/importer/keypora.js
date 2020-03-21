const htmlparser = require("node-html-parser");
const axios = require("axios");
const stringify = require("csv-stringify/lib/sync");
const fs = require("fs");
const path = require("path");
const DESTINATION = "../../db/alpha-keycaps/keypora/";

function formatFilename(name, imgsrc) {
  return `${name
    .toLowerCase()
    .replace(/[^a-z0-9+]+/gi, " ")
    .trim()
    .replace(/ /g, "-")}${path.extname(imgsrc)}`;
}

async function downloadImage(filename, imgsrc) {
  const b = await axios
    .request({
      url: imgsrc,
      responseType: "arraybuffer"
    })
    .then(response => {
      return Buffer.from(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  fs.writeFile(
    path.resolve(path.join(DESTINATION, filename)),
    b,
    "binary",
    function(err) {
      if (err) {
        console.log(err);
      }
    }
  );
}

async function main() {
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
    const filename = formatFilename(name, imgsrc);
    downloadImage(filename, imgsrc);
    return { name: name, img: filename };
  });

  const csvStr = stringify(colorways, {
    header: true,
    columns: [
      { key: "name", header: "name" },
      { header: "img", key: "img" }
    ]
  });
  fs.writeFileSync(path.join(DESTINATION, "colorways.csv"), csvStr);
}

main();
