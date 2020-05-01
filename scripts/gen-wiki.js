// @ts-nocheck
const fs = require('fs');
const path = require('path');
const os = require('os');

const distFolder = path.resolve(path.join(__dirname, '..', 'wiki-dist'));
const pathTemplates = path.resolve(path.join(__dirname, '..', 'wiki'));
const pathDb = path.resolve(path.join(__dirname, '..', 'db'));

if (!fs.existsSync(distFolder)) {
  fs.mkdirSync(distFolder);
  fs.mkdirSync(path.join(distFolder, 'makers'));
}

function formatName(strName) {
  return strName.toLowerCase().replace(/ /g, '-');
}

function parse() {
  for (const a of catalog) {
    console.log('');
    console.log(`- ${a.name}`);
    sculptCount += a.sculpts.length;
    for (const s of a.sculpts) {
      console.log(`---- ${s.name} : ${s.colorways.length} colorways`);
      colorwayCount += s.colorways.length;
    }
  }
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

function genMaker() {
  const content = fs.readFileSync(path.join(pathTemplates, 'maker.md'), 'utf-8');
  return content;
}

function main() {
  const cat = getCatalog();
  fs.writeFileSync(path.join(distFolder, 'Home.md'), genHome(cat));
  fs.writeFileSync(path.join(distFolder, '_Sidebar.md'), genSidebar(cat));
  fs.writeFileSync(path.join(distFolder, '_Footer.md'), genFooter());
}

main();
