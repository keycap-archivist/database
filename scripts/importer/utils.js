// 1Y1Ip37QbnjNNiOYEAvbv9KVz9A74DFEufDDF22F1OvA

const { google } = require("googleapis");
const { crc32 } = require("crc");
const d = google.drive({
  version: "v3",
  auth: process.env.G_API_KEY
});

function genId(input) {
  return crc32(input).toString(16);
}

async function downloadFile(fileId) {
  return await d.files
    .export({
      fileId: fileId,
      mimeType: "text/html"
    })
    .then(res => {
      return res.data;
    });
}

module.exports = {
  downloadFile,
  genId
};
