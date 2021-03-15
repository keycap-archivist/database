/* eslint-disable no-loop-func */
const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');
const PromisePool = require('@mixmaxhq/promise-pool');
const axios = require('axios');
const { resize } = require('./utils');
const db = require('../db/catalog.json');

const SAVE_PATH = path.join(__dirname, '..', 'SAVE_IMG');
const resizedPath = path.join(SAVE_PATH, 'resized');
if (!fs.existsSync(SAVE_PATH)) {
  fs.mkdirSync(SAVE_PATH);
  fs.mkdirSync(resizedPath);
}
if (!fs.existsSync(resizedPath)) {
  fs.mkdirSync(resizedPath);
}
async function downloadImage(imgObj) {
  return axios({
    method: 'GET',
    url: imgObj.src,
    responseType: 'stream',
  })
    .then((r) => {
      const ct = r.headers['content-type'];
      let extension;
      switch (ct) {
        case 'image/jpeg':
          extension = 'jpg';
          break;
        // ugly workaround but it works
        case 'image/png':
          extension = 'jpg';
          break;
        default:
          extension = 'jpg';
          break;
      }
      r.data.pipe(fs.createWriteStream(path.join(SAVE_PATH, `${imgObj.id}.${extension}`)));
    })
    .catch((e) => {
      console.log(`ERROR: ${imgObj.id} ${imgObj.src}`);
      console.log(e);
    });
}

function getCurrentImages() {
  return execSync('aws s3 ls s3://cdn.keycap-archivist.com/keycaps/ | grep ".jpg" | awk "{print $4}" | cut -d "." -f1')
    .toString()
    .split('\n')
    .map((x) => {
      const str = x.trim();
      if (!str) {
        return '';
      }
      const arr = str.split(' ');
      if (arr.length === 1) return str;
      return arr[arr.length - 1].split('.')[0];
    })
    .filter(Boolean);
}

function getCurrentResizedImages() {
  return execSync(
    'aws s3 ls s3://cdn.keycap-archivist.com/keycaps/resized/ | grep ".jpg" | awk "{print $4}" | cut -d "." -f1',
  )
    .toString()
    .split('\n')
    .map((x) => {
      const str = x.trim();
      if (!str) {
        return '';
      }
      const arr = str.split(' ');
      if (arr.length === 1) return str;
      return arr[arr.length - 1].split('.')[0];
    })
    .filter(Boolean);
}

function arrayDifference(currentImages, resizedImages) {
  return currentImages.filter((x) => resizedImages.indexOf(x) === -1);
}

async function resizeImages(imgs, currentImages) {
  const resized = getCurrentResizedImages();
  const toResize = arrayDifference(currentImages, resized);
  console.log('Images to resize');
  console.log(toResize);
  for (const id of toResize) {
    const img = imgs[id];
    await downloadImage(img).catch((e) => {
      console.log(e);
    });
    const srcImgs = await fs.promises.readdir(SAVE_PATH);
    for (const file of srcImgs.filter((x) => x !== 'resized')) {
      await resize(path.join(SAVE_PATH, file))
        .then((d) => {
          fs.writeFileSync(path.join(resizedPath, `${file.split('.')[0]}.jpg`), d);
        })
        .catch(() => {
          console.log(`Unable to resize ${file}`);
          fs.copyFileSync(path.join(SAVE_PATH, file), path.join(resizedPath, `${file.split('.')[0]}.jpg`));
        });
    }
  }
}

async function main() {
  const pool = new PromisePool({ numConcurrent: 6 });
  const imgs = {};
  const start = process.hrtime();
  console.log('Read Db');
  db.forEach((maker) => {
    maker.sculpts.forEach((s) => {
      s.colorways.forEach((c) => {
        imgs[c.id] = { id: c.id, src: c.img };
      });
    });
  });
  const listCurrentImages = getCurrentImages();
  console.log('listCurrentImages');
  console.log(listCurrentImages);
  const items = Object.keys(imgs).length;
  console.log(`${items} images`);
  for (const prop in imgs) {
    const i = imgs[prop];
    if (listCurrentImages.indexOf(i.id) === -1) {
      console.log(`NEW: ${imgs[prop].id}`);
      await pool.start(async () => {
        await downloadImage(i).catch((e) => {
          console.log(e);
        });
      });
    }
  }
  await pool.flush();
  await resizeImages(imgs, listCurrentImages);
  const end = process.hrtime(start);
  console.info('Execution time (hr): %ds %dms', end[0], end[1] / 1000000);
}

main();
