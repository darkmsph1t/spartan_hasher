# spartan_hasher


## Description
spartan_hahser hashes the results of an http request. Primarily for use in generating hashes for scripts & styles in content security policies.

## Installation
npm install --save-dev spartan_hasher

## Use
```
var hasher = require('spartan_hasher')

var hashedSites = hasher(csp.directives) //Returns csp.directives object with 'sha256-x' hashes in place of the sites
```
### csp.directives
csp.directives object looks like this:
```"csp": {
       "directives": {
          "default-src": [
            "self",
          ],
          "media-src": [
            "self"
          ],
          "base-uri": [
            "self"
          ],
          "img-src": [
            "self"
          ],
          "font-src": [
            "self"
          ],
          "connect-src": [
            "self"
          ],
          "object-src": [
            "self"
          ],
          "plugin-types": [
            "not.set.if.obj-src.is.not.set"
          ],
          "child-src": [
            "self"
          ],
          "frame-src": [
            "self"
          ],
          "frame-ancestors": [
            "none"
          ],
          "manifest-src": [
            "self"
          ],
          "worker-src": [
            "none"
          ],
          "script-src": [
            "self", "https://www.myfakescript.js"
          ],
          "style-src": [
            "self", "https://myfakestyle.css"
          ]
        }
      }
```
`self` declarations are ignored. 

The hasher function specfically looks for sites with .css, .js, .scss types
