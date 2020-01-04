const http = require('http');

const requestListener = (req, res) => {
  console.dir(res, { depth:0 });
  // req and res are streams.
  // console.log(req.url);
  res.write('Hello!\n');
  res.end();
};

const server = http.createServer();
server.on('request', requestListener);

server.listen(4242, () => {
  console.log('Server is running...');
});