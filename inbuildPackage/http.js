var http = require("http");
var fs = require("fs");
var server = http.createServer((req,res) => {
    fs.readFile("data.json","utf-8",(err,data)=> {
        res.write(data);
        res.end();
    })
});

server.listen(5000);