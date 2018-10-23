'use strict';
const https = require('https');
const Hashes = require('jshashes');

module.exports = async function hasher(resourceLocation) {
  try {
    https.get(resourceLocation, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data = data + chunk;
      });

      response.on('end', () => {
        let hash = new Hashes.SHA256().b64(data);
        resolve(hash);
      });
    }).on('error', (e) => {
      console.error(e);
    });
  } catch (e) {
    console.log(e);
  }
};


