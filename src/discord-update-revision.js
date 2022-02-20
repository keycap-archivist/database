const axios = require('axios')
const { execSync } = require('child_process')

async function main () {
  const revision = execSync('git rev-parse HEAD db/catalog.json', { encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 })
    .toString()
    .trim()

  await axios.post(process.env.DISCORD_HOOK, {
    content: `Revision: ${revision}`
  })
  await axios
    .post(
      'https://api.github.com/repos/keycap-archivist/website/dispatches',
      { event_type: 'poll-db' },
      {
        headers: {
          Authorization: `token ${process.env.GH_REPO_TOKEN}`
        }
      }
    )
    .catch((e) => {
      console.log('Unable to send data dispatch')
      console.log(e)
    })
}

main()
