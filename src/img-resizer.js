const fs = require('fs')
const path = require('path')
const { resize } = require('./utils')

const myArgs = process.argv.slice(2)
const SAVE_PATH = myArgs[0]
const resizedPath = myArgs[1]

async function main () {
  const basePath250 = path.join(resizedPath, '250')
  const basePath720 = path.join(resizedPath, '720')

  fs.existsSync(basePath250) || fs.mkdirSync(basePath250)
  fs.existsSync(basePath720) || fs.mkdirSync(basePath720)

  const srcImgs = fs.readdirSync(SAVE_PATH, { withFileTypes: true })
  const size = srcImgs.length
  let idx = 0
  for (const img of srcImgs.filter(x => x.isFile())) {
    const filename = `${img.name.split('.')[0]}.jpg`
    const path250 = path.join(basePath250, filename)
    const path720 = path.join(basePath720, filename)
    if (!fs.existsSync(path250)) {
      await resize(path.join(SAVE_PATH, img.name), 'thumb').then((d) => {
        fs.writeFileSync(path250, d)
      })
    }
    if (!fs.existsSync(path720)) {
      await resize(path.join(SAVE_PATH, img.name), 'full').then((d) => {
        fs.writeFileSync(path720, d)
      })
    }
    idx += 1
    console.log(`${idx}/${size}`)
  }
}

main()
