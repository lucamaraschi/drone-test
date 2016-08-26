const http = require('http')
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('Hello World\n')
})

server.listen(9000, () => {
  console.log('Server started')
})
