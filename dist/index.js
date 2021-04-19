
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ueoc-lib.cjs.production.min.js')
} else {
  module.exports = require('./ueoc-lib.cjs.development.js')
}
