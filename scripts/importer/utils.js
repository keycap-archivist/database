const { google } = require('googleapis');
const { crc32 } = require('crc');

const gApiKey = process.env.G_API_KEY;

if (!gApiKey) {
  throw new Error('No Google API KEY provided. Quitting. Use G_API_KEY env var');
}

const d = google.drive({
  version: 'v3',
  auth: process.env.G_API_KEY,
});

function genId(input) {
  return crc32(input).toString(16);
}

async function downloadFile(fileId) {
  return d.files
    .export({
      fileId,
      mimeType: 'text/html',
    })
    .then((res) => res.data);
}

function gDriveParse(catalog, tabs) {
  let currentSculpt;
  let currIdx = -1;
  for (let idx = 0; idx < tabs.length; idx += 1) {
    const element = tabs[idx];
    if (idx % 2 === 0) {
      let sculptName;
      // In case of bad formats
      try {
        sculptName = element.querySelector('span').childNodes[0].rawText;
      } catch (e) {
        // eslint-disable-next-line no-continue
        continue;
      }
      sculptName = sculptName
        .replace(/&rdquo;/g, "'")
        .replace(/&ldquo;/g, "'")
        .replace(/&nbsp;/g, '')
        .replace(/&amp;/g, '&')
        .trim();
      if (sculptName !== currentSculpt) {
        currentSculpt = sculptName;
        currIdx += 1;
      }
    } else {
      // eslint-disable-next-line no-loop-func
      element.querySelectorAll('td').forEach((e) => {
        let img = '';
        if (e.querySelector('img')) {
          img = e.querySelector('img').rawAttributes.src;
        }
        if (img !== '') {
          if (!catalog.sculpts[currIdx]) {
            // eslint-disable-next-line no-param-reassign
            catalog.sculpts[currIdx] = {
              id: genId(`${catalog.name}-${currentSculpt}`),
              name: currentSculpt,
              colorways: [],
            };
          }
          catalog.sculpts[currIdx].colorways.push({
            name: e.text.trim(),
            img,
            id: genId(img),
          });
        }
      });
    }
  }
  // eslint-disable-next-line no-param-reassign
  catalog.sculpts = catalog.sculpts.filter((x) => x);
  return catalog;
}

function gDocUrl(id) {
  return `https://docs.google.com/document/d/${id}`;
}

module.exports = {
  downloadFile,
  gDriveParse,
  genId,
  gDocUrl,
};
