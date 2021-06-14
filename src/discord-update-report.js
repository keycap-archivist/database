const axios = require('axios');
const { execSync } = require('child_process');
const slugify = require('slugify');

function formatReport(report) {
  const out = [];
  out.push('');
  out.push('**CATALOG UPDATE**');
  for (const r of report) {
    out.push(`- [${r.catalog}](https://keycap-archivist.com/maker/${slugify(r.catalog, { replacement: '-', remove: /[#,.:?()'"/]/g, lower: true }).toLowerCase()}) :`);
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
    content: {
        "embeds": [{
          "description": `${formattedReport}`
        }]
      },
  });
  // await axios
  //   .post(
  //     'https://api.github.com/repos/keycap-archivist/website/dispatches',
  //     { event_type: 'poll-db' },
  //     {
  //       headers: {
  //         Authorization: `token ${process.env.GH_REPO_TOKEN}`,
  //       },
  //     },
  //   )
  //   .catch((e) => {
  //     console.log('Unable to send data dispatch');
  //     console.log(e);
  //   });
}

main();
