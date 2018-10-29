'use strict';
const hasher = require('./hasher');

module.exports = async function httpHashes(cspDirectives, hashType = '256') {
  let newObject = {};
  const validDirectives = ['default-src', 'media-src', 'base-uri', 'img-src', 'font-src', 'connect-src', 'object-src', 'plugin-types', 'child-src', 'frame-src', 'frame-ancestors', 'manifest-src', 'worker-src', 'script-src', 'style-src'];
  for (const key in cspDirectives['directives']) {
    if (!validDirectives.includes(key)) {
      throw 'invalid directive tag passed';
    }
  }

  for (let directive of validDirectives) {
    const hashedUrls = [];
    for (let url of cspDirectives['directives'][directive]) {
      if (/(self|none)/gi.test(url)) {
        hashedUrls.push(url);
      } else if (/(.*\.js|.*\.css|.*\.scss)/gi.test(url)) {
        hashedUrls.push(await hasher(url, hashType));
      } else {
        throw 'invalid content passed';
      }
    }
    newObject[directive] = hashedUrls;
  }
  return {
    'directives': {
      ...newObject
    }
  };
};
