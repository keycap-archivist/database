const { readdirSync, writeFileSync } = require('fs')
const { join } = require('path')

async function main () {
  const dbPath = join(__dirname, '..', 'db')
  const files = readdirSync(dbPath)
  for (const f of files.filter(x => x.endsWith('json') && x !== 'catalog.json')) {
    const data = require(join(dbPath, f))
    for (const s of data.sculpts) {
      for (const c of s.colorways) {
        c.img = `https://cdn.keycap-archivist.com/keycaps/${c.id}.jpg`
      }
    }
    writeFileSync(join(dbPath, f), JSON.stringify(data))
  }
  const catData = require(join(dbPath, 'catalog.json'))
  for (const a of catData) {
    for (const s of a.sculpts) {
      for (const c of s.colorways) {
        c.img = `https://cdn.keycap-archivist.com/keycaps/${c.id}.jpg`
      }
    }
  }
  writeFileSync(join(dbPath, 'catalog.json'), JSON.stringify(catData))
}

if (require.main === module) {
  main().catch(e => {
    throw e
  })
}
