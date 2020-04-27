const { google } = require("googleapis");
const { crc32 } = require("crc");
const gApiKey = process.env.G_API_KEY;

if (!gApiKey) {
  throw "No Google API KEY provided. Quitting. Use G_API_KEY env var";
}

const d = google.drive({
  version: "v3",
  auth: process.env.G_API_KEY,
});

function genId(input) {
  return crc32(input).toString(16);
}

async function downloadFile(fileId) {
  return await d.files
    .export({
      fileId: fileId,
      mimeType: "text/html",
    })
    .then((res) => {
      return res.data;
    });
}

function gDriveParse(catalog, tabs) {
  let currentSculpt;
  let currIdx = -1;
  for (let idx = 0; idx < tabs.length; idx++) {
    const element = tabs[idx];
    if (idx % 2 === 0) {
      let sculptName = element.querySelector("span").childNodes[0].rawText;
      sculptName = sculptName
        .replace(/\&rdquo;/g, "'")
        .replace(/\&ldquo;/g, "'")
        .replace(/\&nbsp;/g, "")
        .replace(/\&amp;/g, "&")
        .trim();
      if (sculptName !== currentSculpt) {
        currentSculpt = sculptName;
        currIdx++;
      }
    } else {
      element.querySelectorAll("td").forEach((e) => {
        let img = "";
        if (e.querySelector("img")) {
          img = e.querySelector("img").rawAttributes.src;
        }
        if (img !== "") {
          if (!catalog.sculpts[currIdx]) {
            catalog.sculpts[currIdx] = {
              id: genId(currentSculpt),
              name: currentSculpt,
              colorways: [],
            };
          }
          catalog.sculpts[currIdx].colorways.push({
            name: e.text.trim(),
            img: img,
            id: genId(img),
          });
        }
      });
    }
  }
  catalog.sculpts = catalog.sculpts.filter((x) => x);
  return catalog;
}

module.exports = {
  downloadFile,
  gDriveParse,
  genId,
};
