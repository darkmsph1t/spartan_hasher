'use strict'
let hasher = require('hasher')
let newObject = {}


module.exports = function httpHashes(cspDirectives) {
  for (let key in cspDirectives) {
    for (let index = 0; index < object[key].length; index++) {
      newObject[key] = hasher(object[key[index]])
    }
  }
  return newObject
}
