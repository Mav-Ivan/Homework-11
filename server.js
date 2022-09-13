const http = require("http");
const path = require('path')
const os = require('os')

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end(`<h3>System info</h3>
  Current user name :${os.userInfo().username} <br>
  OS type : ${os.type()} <br>
  System work time : ${os.uptime()} <br>
  Current work directory :  ${path.dirname("/Homework-11/server.js")} <br>
  Server file name :  ${path.basename("/Homework-11/server.js")}
  `);
}).listen(5000);

