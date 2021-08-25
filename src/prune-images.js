const { spawn, exec } = require('child_process');
const db = require('../db/catalog.json');

function getCurrentImages() {
  return new Promise((res) => {
    const cmd = spawn('aws', ['s3', 'ls', 's3://cdn.keycap-archivist.com/keycaps/']);
    const cmdData = [];
    cmd.stdout.on('data', (data) => {
      cmdData.push(data.toString());
    });
    cmd.on('close', () => {
      res(
        cmdData
          .filter(Boolean)
          .join('')
          .split('\n')
          .map((x) => {
            const re = /\b([\w\.]+)$/gm;
            const result = x.match(re);
            if (result && result.length !== 0) {
              return result[0].split('.')[0];
            }
            return '';
          })
          .filter(Boolean),
      );
    });
  });
}
async function promExec(cmd) {
  return new Promise((res) => {
    exec(cmd, (err, stdout, stderr) => {
      console.log(stdout);
      res(stdout);
    });
  });
}

async function main() {
  const imgs = [];
  const toDel = [];
  db.forEach((maker) => {
    maker.sculpts.forEach((s) => {
      s.colorways.forEach((c) => {
        imgs[c.id] = { id: c.id, src: c.img };
      });
    });
  });

  const inDistant = await getCurrentImages();
  for (const i of inDistant) {
    if (!imgs[i]) {
      toDel.push(i);
    }
  }

  console.log(`In db: ${Object.keys(imgs).length} images`);
  console.log(`In distant: ${inDistant.length} images`);
  console.log(`To Del: ${toDel.length} images`);

  for (const i of toDel) {
    const p = [];
    p.push(promExec(`aws s3 rm s3://cdn.keycap-archivist.com/keycaps/${i}.jpg`));
    p.push(promExec(`aws s3 rm s3://cdn.keycap-archivist.com/keycaps/720/${i}.jpg`));
    p.push(promExec(`aws s3 rm s3://cdn.keycap-archivist.com/keycaps/250/${i}.jpg`));
    await Promise.all(p);
  }
}

main()
  .then(() => {
    console.log('Finished');
  })
  .catch((e) => {
    console.log(e);
  });
