const http = require('http')
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('Ciao Matteo dalla Villa delle Rose\n')
})

server.listen(9000, () => {
  console.log('Server started')
})
