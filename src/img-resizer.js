const fs = require('fs')
const path = require('path')
const { resize } = require('./utils')

const myArgs = process.argv.slice(2)
const SAVE_PATH = myArgs[0]
const resizedPath = myArgs[1]

async function main () {
  fs.mkdirSync(path.join(resizedPath, '250'))
  fs.mkdirSync(path.join(resizedPath, '720'))
  const srcImgs = fs.readdirSync(SAVE_PATH)
  const size = srcImgs.length
  let idx = 0
  for (const img of srcImgs) {
    await resize(path.join(SAVE_PATH, img), 'thumb').then((d) => {
      fs.writeFileSync(path.join(resizedPath, '250', `${img.split('.')[0]}.jpg`), d)
    })
    await resize(path.join(SAVE_PATH, img), 'full').then((d) => {
      fs.writeFileSync(path.join(resizedPath, '720', `${img.split('.')[0]}.jpg`), d)
    })
    idx += 1
    console.log(`${idx}/${size}`)
  }
}

main()
