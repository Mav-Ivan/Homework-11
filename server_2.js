const http = require("http");
const os = require('os')
const personalmodule = require('./personalmodule')

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  let name = os.userInfo().username
  
  let info = personalmodule.dateRequest(name)
  response.end(info);
}).listen(5000);

