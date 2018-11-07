# spartan_hasher


## Description
spartan_hahser hashes the results of an http request. Primarily for use in generating hashes for scripts & styles in content security policies.

## Installation
`npm install --save-dev spartan_hasher`

## Use
```
var hasher = require('spartan_hasher')

var hashedSites = await hasher(csp.directives,hashType) //Returns csp.directives object with 'sha256-x' or 'sha512-x' hashes in place of the sites

var hashedSites;

hasher(csp.directives,hashType).then(hashedResult =>{
  hashedSites = hashedResult;
});

```
### csp.directives
csp.directives object looks like this:
```"csp": {
       "directives": {
          "default-src": [
            "self",
          ],
          "media-src": [
            "none"
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
            "https://www.myfakesite.com/myfakescript.js"
          ],
          "child-src": [
            "none"
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
            "self", "https://www.myfakesite.com/myfakescript.js"
          ],
          "style-src": [
            "self", "https://myfakesite.css/myfakescript.css"
          ]
        }
      }
```
`self` and `none` declarations are ignored. 

## hashType
hashType 
```
hash type can be either 256 or 512 to signify the if a sha256 hash should be return or a sha512 should be returned.
```

The hasher function specfically looks for .css, .js, .scss file types
