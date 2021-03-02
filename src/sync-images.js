/* eslint-disable no-loop-func */
const { resize } = require('./utils');
const fs = require('fs');
const path = require('path');
const PromisePool = require('@mixmaxhq/promise-pool');
const axios = require('axios');
const db = require('../db/catalog.json');
const dbOld = require('../catalog_old.json');

const SAVE_PATH = path.join(__dirname, '..', 'SAVE_IMG');
const resizedPath = path.join(SAVE_PATH, 'resized');
if (!fs.existsSync(SAVE_PATH)) {
  fs.mkdirSync(SAVE_PATH);
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

async function main() {
  const pool = new PromisePool({ numConcurrent: 6 });
  const imgs = {};
  const imgsOld = {};
  const start = process.hrtime();
  console.log('Read Db');
  db.forEach((maker) => {
    maker.sculpts.forEach((s) => {
      s.colorways.forEach((c) => {
        imgs[c.id] = { id: c.id, src: c.img };
      });
    });
  });
  dbOld.forEach((maker) => {
    maker.sculpts.forEach((s) => {
      s.colorways.forEach((c) => {
        imgsOld[c.id] = { id: c.id, src: c.img };
      });
    });
  });
  const items = Object.keys(imgs).length;
  console.log(`${items} images`);
  for (const prop in imgs) {
    const i = imgs[prop];
    if (!imgsOld[prop]) {
      console.log(`NEW: ${imgs[prop].id}`);
      await pool.start(async () => {
        await downloadImage(i).catch((e) => {
          console.log(e);
        });
      });
    }
  }
  await pool.flush();
  const srcImgs = await fs.promises.readdir(SAVE_PATH);
  for (const file of srcImgs) {
    await resize(path.join(SAVE_PATH, file)).then((d) => {
      fs.writeFileSync(path.join(resizedPath, `${file.split('.')[0]}.jpg`, d));
    });
  }
  const end = process.hrtime(start);
  console.info('Execution time (hr): %ds %dms', end[0], end[1] / 1000000);
}

main();
