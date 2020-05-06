const axios = require('axios');
const { execSync } = require('child_process');

function formatReport(report) {
  const out = [];
  out.push('');
  out.push('**CATALOG UPDATE**');
  for (const r of report) {
    out.push(`- ${r.catalog} :`);
    if (r.addition) {
      out.push(`    - ${r.addition} addition(s)`);
    }
    if (r.deletion) {
      out.push(`    - ${r.deletion} deletion(s)`);
    }
  }
  out.push('');
  return out.join('\n');
}

function formatCatalogName(rawName) {
  const reg = /db\/(.*)\.csv/g;
  const out = [];
  const n = reg.exec(rawName)[1];
  for (const word of n.split('-')) {
    out.push(word.charAt(0).toUpperCase() + word.slice(1));
  }
  return out.join(' ');
}

async function main() {
  const r = execSync('git diff --numstat HEAD db/*.csv', { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 }).toString();
  let report = [];
  for (const line of r.split('\n')) {
    const result = line.split('\t');
    if (result.length !== 3) {
      // eslint-disable-next-line no-continue
      continue;
    }
    report.push({
      addition: result[0],
      deletion: result[1],
      catalog: formatCatalogName(result[2]),
    });
  }
  report = report.filter((x) => x.catalog.toLowerCase() !== 'catalog');
  if (!report.length) {
    console.log('No Report. Skipping');
    process.exit(0);
  }
  const formattedReport = formatReport(report);

  console.log(formattedReport);
  await axios.post(process.env.DISCORD_HOOK, {
    content: formattedReport,
  });
}

main();
