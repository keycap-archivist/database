/* eslint-disable no-loop-func */
const fs = require('fs');
const path = require('path');
const PromisePool = require('@mixmaxhq/promise-pool');
const axios = require('axios');
const db = require('../db/catalog.json');
const dbOld = require('../catalog_old.json');

const SAVE_PATH = path.join(__dirname, '..', 'SAVE_IMG');
if (!fs.existsSync(SAVE_PATH)) {
  fs.mkdirSync(SAVE_PATH);
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
        case 'image/png':
          extension = 'png';
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
  const end = process.hrtime(start);
  console.info('Execution time (hr): %ds %dms', end[0], end[1] / 1000000);
}

main();
