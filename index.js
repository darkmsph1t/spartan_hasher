'use strict';
const hasher = require('hasher');

module.exports = function httpHashes(cspDirectives) {
  let newObject = {};
  for (let directive in cspDirectives) {
    const hashedUrls = [];
    for (let url of directive) {
      hashedUrls.push(hasher(url));
    }
    newObject[directive] = hashedUrls;
  }
  return newObject;
};
