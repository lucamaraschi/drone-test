const http = require('http')
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('Hey Peter on:\n' + Date.now())
})

server.listen(9000, () => {
  console.log('Server started')
})
