/**
 * Dependencies.
 */

const http = require('http')
const net = require('net')
const request = require('request')


/**
 * Default request options.
 */

const options = {
  method: 'GET'
}


/**
 * Create HTTP server and send request using the npm module
 * request/request
 *
 * @param {Function} cb
 * @param {Object} data
 * @api public
 */

module.exports = function (cb, data) {
  const server = http.createServer((req, res) => {
    cb(req, res)
    res.end()
  }).listen(() => {
    const port = server.address().port
    const sock = net.connect(port)
    request(Object.assign(request, data), () => {
      sock.end()
      server.close()
    })
  })
}
