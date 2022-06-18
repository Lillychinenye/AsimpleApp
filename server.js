var http = require("http");
var fs= require("fs");



//create a server object:
http.createServer((req, res)=>{
    fs.readFile('index.html',(err, data)=> {
        if(err)throw err;
    res.writeHead(200, {'Content-Type': 'html'});
  res.write(data); //write a response to the client
  res.end(); //end the response
    })
}).listen(8080);