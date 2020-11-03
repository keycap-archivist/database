const { google } = require('googleapis');
const { crc32 } = require('crc');
const { decode } = require('he');

const attributes = Object.freeze({
  selfOrdered: 'ka_self_order',
  release: 'ka_release',
  cover: 'ka_cover',
  note: 'ka_note',
});

function genId(input) {
  return crc32(input).toString(16);
}

async function downloadFile(fileId) {
  const gApiKey = process.env.G_API_KEY;

  if (!gApiKey) {
    throw new Error('No Google API KEY provided. Quitting. Use G_API_KEY env var');
  }

  const d = google.drive({
    version: 'v3',
    auth: process.env.G_API_KEY,
  });
  return d.files
    .export({
      fileId,
      mimeType: 'text/html',
    })
    .then((res) => res.data);
}

function isSelfOrdered(index) {
  const re = new RegExp(`\\(${attributes.selfOrdered}\\)`, 'gim');
  return re.test(index);
}

function gDriveParse(catalog, tabs) {
  let currentSculpt;
  let sculptDate;
  let currIdx = -1;
  for (let idx = 0; idx < tabs.length; idx += 1) {
    const element = tabs[idx];
    if (idx % 2 === 0) {
      let sculptName;
      // In case of bad formats
      try {
        sculptName = element.querySelector('span').childNodes[0].rawText;
        const regDate = new RegExp(/\(([a-zA-Z ]*\d{4})\)/, 'gim');
        // Look for the release arg in all the spans in the title table
        const s = element.querySelectorAll('span').find((x) => regDate.test(x.rawText));
        if (s) {
          regDate.lastIndex = 0;
          // decode and replace to have only to handle regular double quotes ""
          const str = decode(s.rawText).replace(/(”|“)/g, '"');
          const dateMatch = regDate.exec(str);
          if (dateMatch) {
            // eslint-disable-next-line prefer-destructuring
            sculptDate = dateMatch[1];
            sculptName = sculptName.replace(regDate, '');
          }
        }
      } catch (e) {
        // eslint-disable-next-line no-continue
        continue;
      }
      sculptName = decode(sculptName).trim();
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
              releaseDate: sculptDate,
              colorways: [],
            };
            // console.log(catalog.sculpts[currIdx]);
          }
          let { text } = e;
          text = text.replace(/(”|“)/g, '"');
          let isCover = false;
          const reCover = new RegExp(`\\(${attributes.cover}\\)`, 'gim');
          if (reCover.test(text)) {
            isCover = true;
            text = text.replace(reCover, '');
          }
          const regDate = new RegExp(/\(([a-zA-Z ]*\d{4})\)/, 'gim');
          const dateMatch = regDate.exec(text);
          let releaseDate;
          if (dateMatch) {
            // eslint-disable-next-line prefer-destructuring
            releaseDate = dateMatch[1];
            text = text.replace(regDate, '');
          }
          catalog.sculpts[currIdx].colorways.push({
            name: decode(text).trim(),
            img,
            id: genId(img),
            isCover,
            releaseDate,
            note: '',
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
  isSelfOrdered,
  attributes,
};
