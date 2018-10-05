const https = require('https')
let Hashes = require('jshashes')

module.exports = function hasher(thingToHash) {
  try {
    https.get(thingToHash, (response) => {
      let data = ''
      response.on('data', (chunk) => {
        data = data + chunk
      })

      response.on('end', () => {
        let hash = new Hashes.SHA256().b64(data)
        return hash
      })
    }).on('error', (e) => {
      console.error(e)
    })
  } catch (e) {
    console.log(e)
  }
}

