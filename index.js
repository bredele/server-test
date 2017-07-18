/**
 * Dependencies.
 */

const http = require('http')
const net = require('net')
const request = require('request')


/**
 * Create HTTP server and send request using the npm module
 * request/request
 *
 * @param {Function} cb
 * @param {Object} data
 * @param {Boolean} end
 * @api public
 */

module.exports = function (cb, data, end) {
 const server = http.createServer((req, res) => {
   cb(req, res)
   if (!end) res.end()
 }).listen(() => {
   const port = server.address().port
   const sock = net.connect(port)
   request(`http://localhost:${port}`, Object.assign({
     method: 'GET'
   }, data), () => {
     sock.end()
     server.close()
   })
 })
}
