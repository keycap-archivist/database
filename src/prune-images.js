const { execSync } = require('child_process');
const db = require('../db/catalog.json');

const imgs = [];
const toDel = [];

function getCurrentImages() {
  return execSync(
    'aws s3 ls s3://cdn.keycap-archivist.com/keycaps/ | grep ".jpg" | awk "{print $4}" | cut -d "." -f1',
    { maxBuffer: 2000 * 1024 },
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

db.forEach((maker) => {
  maker.sculpts.forEach((s) => {
    s.colorways.forEach((c) => {
      imgs[c.id] = { id: c.id, src: c.img };
    });
  });
});

const inDistant = getCurrentImages();
for (const i of inDistant) {
  if (!imgs[i]) {
    toDel.push(i);
  }
}

console.log(`In db: ${Object.keys(imgs).length} images`);
console.log(`In distant: ${inDistant.length} images`);
console.log(`To Del: ${toDel.length} images`);

for (const i of toDel) {
  const l1 = execSync(`aws s3 rm s3://cdn.keycap-archivist.com/keycaps/${i}.jpg`).toString();
  console.log(l1);
  const l2 = execSync(`aws s3 rm s3://cdn.keycap-archivist.com/keycaps/720/${i}.jpg`).toString();
  console.log(l2);
  const l3 = execSync(`aws s3 rm s3://cdn.keycap-archivist.com/keycaps/250/${i}.jpg`).toString();
  console.log(l3);
}
