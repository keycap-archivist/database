// @ts-nocheck
const fs = require('fs');
const path = require('path');
const os = require('os');
const rimraf = require('rimraf');

const distFolder = path.resolve(path.join(__dirname, '..', 'wiki-dist'));
const pathTemplates = path.resolve(path.join(__dirname, '..', 'wiki'));
const pathDb = path.resolve(path.join(__dirname, '..', 'db'));

function formatName(strName) {
  return strName.toLowerCase().replace(/ /g, '-');
}

// function parse() {
//   for (const a of catalog) {
//     console.log('');
//     console.log(`- ${a.name}`);
//     sculptCount += a.sculpts.length;
//     for (const s of a.sculpts) {
//       console.log(`---- ${s.name} : ${s.colorways.length} colorways`);
//       colorwayCount += s.colorways.length;
//     }
//   }
// }
function sortResults(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

function getCatalog() {
  return JSON.parse(fs.readFileSync(path.join(pathDb, 'catalog.json'), 'utf-8'));
}

function genHome() {
  const content = fs.readFileSync(path.join(pathTemplates, 'Home.md'), 'utf-8');
  return content;
}

function genSidebar(catalog) {
  const content = fs.readFileSync(path.join(pathTemplates, '_Sidebar.md'), 'utf-8');
  const makerlist = [];
  for (const a of catalog) {
    makerlist.push(`- [${a.name}](makers/${formatName(a.name)}.md)`);
  }
  return content.replace('<makerlist>', makerlist.join(os.EOL));
}

function genFooter() {
  const content = fs.readFileSync(path.join(pathTemplates, '_Footer.md'), 'utf-8');
  return content;
}

function genColorway(content, c) {
  content.push(`| ${c.name !== '' ? c.name : '(no name)'} | <img width="250" src="${c.img}"/> |`);
}

function genSculpt(content, s) {
  content.push('');
  content.push(`## ${s.name}`);
  content.push('');
  content.push('| Colorway | image |');
  content.push('| --- | --- |');
  for (const c of s.colorways.sort(sortResults)) {
    genColorway(content, c);
  }
}

function genMaker(artist) {
  let content = fs.readFileSync(path.join(pathTemplates, 'maker.md'), 'utf-8');
  content = content.replace('<NAME>', artist.name);
  const makerContent = [];
  for (const s of artist.sculpts.sort(sortResults)) {
    genSculpt(makerContent, s);
  }
  content += makerContent.join('\n');
  return content;
}

async function main() {
  rimraf.sync(distFolder);
  fs.mkdirSync(distFolder);

  const cat = getCatalog();
  fs.writeFileSync(path.join(distFolder, 'Home.md'), genHome(cat));
  fs.writeFileSync(path.join(distFolder, '_Sidebar.md'), genSidebar(cat));
  fs.writeFileSync(path.join(distFolder, '_Footer.md'), genFooter());

  const makerPath = path.join(distFolder, 'makers');
  fs.mkdirSync(makerPath);
  const p = [];
  for (const c of cat) {
    const strMakerOut = genMaker(c);
    p.push(fs.promises.writeFile(path.join(makerPath, `${formatName(c.name)}.md`), strMakerOut));
  }
  await Promise.all(p);
}

main();
