const fs = require('fs');
const server = require('https')
.createServer({
  key: fs.readFilesSync('./key.pem'),
  cert: fs.readFilesSync('./cert.pem'),
});

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('End\n')
});

server.listen(443);
