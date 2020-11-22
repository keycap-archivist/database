/* eslint-disable no-loop-func */
// const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const PromisePool = require('@mixmaxhq/promise-pool');
const axios = require('axios');
const db = require('../db/catalog.json');

const SAVE_PATH = path.join(__dirname, '..', 'SAVE_IMG');
if (!fs.existsSync(SAVE_PATH)) {
  fs.mkdirSync(SAVE_PATH);
}

// const s3 = new AWS.S3();
// const myBucket = 'my.unique.bucket.name';
// const myKey = 'myBucketKey';
// aws s3 sync ./ s3://cdn.keycap-archivist.com/keycaps/ --storage-class REDUCED_REDUNDANCY --acl public-read

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
  const imgs = [];
  const start = process.hrtime();
  console.log('Read Db');
  db.forEach((maker) => {
    maker.sculpts.forEach((s) => {
      s.colorways.forEach((c) => {
        imgs.push({ id: c.id, src: c.img });
      });
    });
  });
  const end = process.hrtime(start);
  console.info('Execution time (hr): %ds %dms', end[0], end[1] / 1000000);
  console.log(`${imgs.length} images`);
  let index = 0;
  for (const i of imgs) {
    await pool.start(async () => {
      if (!fs.existsSync(path.join(SAVE_PATH, `${i.id}.jpg`)) && !fs.existsSync(path.join(SAVE_PATH, `${i.id}.png`))) {
        await downloadImage(i).catch((e) => {
          console.log(e);
        });
      }
      index += 1;
      console.log(`${index}/${imgs.length}`);
    });
  }
  await pool.flush();
}

main();
