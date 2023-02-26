const b = 5;
const c = require('./main.js');

function newSum(){
 sum = c+ b;
  return sum;
}

const result = newSum();

const http = require ('http');

// const server = http.createServer((req, resp){
//   console.log('I am listening');
//   resp.setHeader('Content-Type', 'text/html');
//   resp.end(`
//   <p>My Module is:${newSum()}<p/>
//   <h1>Hi there at the frontend</h1>
//   `);
// });
// server.listen(3000);


const server = http.createServer( function (req, res) {
  console.log('I am listening');
  res.writeHead(200);
  res.end(`
  <p>My Module is:${result}<p/>
  <h1>Hi there at the frontend</h1>
  `);
})
server.listen(3000);