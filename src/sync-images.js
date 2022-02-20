/* eslint-disable no-loop-func */
const fs = require('fs')
const { readFile } = require('fs/promises')
const { spawn } = require('child_process')
const path = require('path')
const PromisePool = require('@mixmaxhq/promise-pool')
const axios = require('axios')
const { resize } = require('./utils')
const db = require('../db/catalog.json')

const SAVE_PATH = path.join(__dirname, '..', 'SAVE_IMG')
if (!fs.existsSync(SAVE_PATH)) {
  fs.mkdirSync(SAVE_PATH)
  fs.mkdirSync(path.join(SAVE_PATH, '250'))
  fs.mkdirSync(path.join(SAVE_PATH, '720'))
}

if (!fs.existsSync(path.join(SAVE_PATH, '720'))) {
  fs.mkdirSync(path.join(SAVE_PATH, '720'))
}
if (!fs.existsSync(path.join(SAVE_PATH, '250'))) {
  fs.mkdirSync(path.join(SAVE_PATH, '250'))
}

async function downloadImage (imgObj) {
  if (fs.existsSync(path.join(SAVE_PATH, `${imgObj.id}.jpg`))) {
    console.log(`${imgObj.id}.jpg already exists. Skipping downloading`)
    return
  }
  console.log(`download ${imgObj.src}`)
  const r = await axios({
    method: 'GET',
    url: imgObj.src,
    responseType: 'arraybuffer'
  })
  const ct = r.headers['content-type']
  let extension
  switch (ct) {
    case 'image/jpeg':
      extension = 'jpg'
      break
    // ugly workaround but it works
    case 'image/png':
      extension = 'jpg'
      break
    default:
      extension = 'jpg'
      break
  }
  fs.writeFileSync(path.join(SAVE_PATH, `${imgObj.id}.${extension}`), r.data)
  console.log(`written ${imgObj.src}`)
}

function getCurrentImages () {
  return new Promise((resolve) => {
    const cmd = spawn('aws', ['s3', 'ls', 's3://cdn.keycap-archivist.com/keycaps/'])
    const cmdData = []
    cmd.stdout.on('data', (data) => {
      cmdData.push(data.toString())
    })
    cmd.on('close', () => {
      resolve(
        cmdData
          .filter(Boolean)
          .join('')
          .split('\n')
          .map((x) => {
            const re = /\b([\w.]+)$/gm
            const result = x.match(re)
            if (result && result.length !== 0) {
              return result[0].split('.')[0]
            }
            return ''
          })
          .filter(Boolean)
      )
    })
  })
}

function getCurrentResizedImages () {
  return new Promise((resolve) => {
    const cmd = spawn('aws', ['s3', 'ls', 's3://cdn.keycap-archivist.com/keycaps/250/'])
    const cmdData = []
    cmd.stdout.on('data', (data) => {
      cmdData.push(data.toString())
    })
    cmd.on('close', () => {
      resolve(
        cmdData
          .filter(Boolean)
          .join('')
          .split('\n')
          .map((x) => {
            const re = /\b([\w.]+)$/gm
            const result = x.match(re)
            if (result && result.length !== 0) {
              return result[0].split('.')[0]
            }
            return ''
          })
          .filter(Boolean)
      )
    })
  })
}

function arrayDifference (currentImages, resizedImages) {
  return currentImages.filter((x) => resizedImages.indexOf(x) === -1)
}

async function resizeImages (imgs, currentImages) {
  const resized = await getCurrentResizedImages()
  const toResize = arrayDifference(currentImages, resized)
  console.log(`${toResize.length}Images to resize`)
  let idx = 0
  for (const id of toResize) {
    idx += 1
    const img = imgs[id]
    await downloadImage(img).catch((e) => {
      console.log(e)
    })
    console.log(`${idx}/${toResize.length}`)
  }
  console.log('Downloaded all the files to resize')
  const srcImgs = await fs.promises.readdir(SAVE_PATH)
  const imgsInSave = srcImgs.filter((x) => x !== '250' && x !== '720')
  idx = 0
  for (const file of imgsInSave) {
    idx += 1
    const buff = await readFile(path.join(SAVE_PATH, file))
    await resize(path.join(SAVE_PATH, file), 'thumb', buff)
      .then((d) => {
        fs.writeFileSync(path.join(SAVE_PATH, '250', `${file.split('.')[0]}.jpg`), d)
      })
      .catch(() => {
        console.log(`Unable to resize ${file}`)
        fs.copyFileSync(path.join(SAVE_PATH, file), path.join(SAVE_PATH, '250', `${file.split('.')[0]}.jpg`))
      })
    await resize(path.join(SAVE_PATH, file), 'full', buff)
      .then((d) => {
        fs.writeFileSync(path.join(SAVE_PATH, '720', `${file.split('.')[0]}.jpg`), d)
      })
      .catch(() => {
        console.log(`Unable to resize ${file}`)
        fs.copyFileSync(path.join(SAVE_PATH, file), path.join(SAVE_PATH, '720', `${file.split('.')[0]}.jpg`))
      })
    console.log(`Resize: ${idx}/${imgsInSave.length}`)
  }
}

async function main () {
  const pool = new PromisePool({ numConcurrent: 3 })
  const imgs = {}
  const start = process.hrtime()
  console.log('Read Db')
  db.forEach((maker) => {
    maker.sculpts.forEach((s) => {
      s.colorways.forEach((c) => {
        imgs[c.id] = { id: c.id, src: c.img }
      })
    })
  })
  const listCurrentImages = await getCurrentImages()
  const items = Object.keys(imgs).length
  console.log(`${items} images`)
  const newImages = []
  for (const prop in imgs) {
    const i = imgs[prop]
    if (listCurrentImages.indexOf(i.id) === -1) {
      console.log(`NEW: ${imgs[prop].id}`)
      await pool.start(async () => {
        await downloadImage(i).catch((e) => {
          console.log(e)
        })
      })
      newImages.push(i.id)
    }
  }
  await pool.flush()
  console.log('New Images')
  console.log(newImages)
  await resizeImages(imgs, [].concat(listCurrentImages, newImages))
  const end = process.hrtime(start)
  console.info('Execution time (hr): %ds %dms', end[0], end[1] / 1000000)
}

main().catch((e) => {
  throw e
})
