'use strict';
const https = require('https');
const Hashes = require('jshashes');

module.exports = async function hasher(resourceLocation, hashType = '256') {
  try {
    const result = new Promise(resolve => {
      https.get(resourceLocation, (response) => {
        let data = '';
        response.on('data', (chunk) => {
          data = data + chunk;
        });
        response.on('end', () => {
          let hash;
          if (hashType === '256') {
            hash = new Hashes.SHA256().b64(data);
          }
          else if (hashType === '512') {
            hash = new Hashes.SHA512().b64(data);
          }
          resolve(hash);
        });
      }).on('error', (e) => {
        console.error(e);
        resolve(null);
      });
    });
    return await result;
  } catch (e) {
    console.log(e);
  }
  return null;
};


