const db = require('../db/catalog.json')
const { promExec } = require('./utils')

async function main (makerId) {
  const toDel = []
  const m = db.find(x => x.id === makerId)
  if (!m) {
    console.log('no maker found')
  } else {
    console.log(`found maker ${m.id} ${m.name}`)
  }
  m.sculpts.forEach(s => {
    s.colorways.forEach((c) => {
      toDel.push(c.id)
    })
  })
  console.log(`${toDel.length} caps to delete`)
  for (const i of toDel) {
    const p = []
    p.push(promExec(`aws s3 rm s3://cdn.keycap-archivist.com/keycaps/${i}.jpg`))
    p.push(promExec(`aws s3 rm s3://cdn.keycap-archivist.com/keycaps/720/${i}.jpg`))
    p.push(promExec(`aws s3 rm s3://cdn.keycap-archivist.com/keycaps/250/${i}.jpg`))
    await Promise.all(p)
  }
}
const args = process.argv.slice(2)
main(args[0])
  .then(() => {
    console.log('Finished')
  })
  .catch((e) => {
    console.log(e)
  })
