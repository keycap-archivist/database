const { flatten } = require('./utils')
const db = require('../db/catalog.json')

const flatDb = flatten(db)
const dupes = []
const t = []
for (const e of flatDb.full) {
  if (t.includes(e.id)) {
    dupes.push(e.id)
  } else {
    t.push(e.id)
  }
}

for (const d of dupes) {
  console.log(flatDb.full.find((x) => x.id === d))
}
