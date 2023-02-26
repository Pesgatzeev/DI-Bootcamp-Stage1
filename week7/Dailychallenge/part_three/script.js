let curentTime = require('./main.js');
let http = require('http');

const server = http.createServer( function(req, res){
  res.setHeader('Content-Type', 'text/html');
  res.end(`
  <p>The date and time: ${curentTime}</p>`)
});
server.listen(8000);