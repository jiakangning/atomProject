const http = require('http');
var app = http.createServer(function (req,res){
res.write('hello World!')
res.end();
}).listen(3000);
console.log('createServer is ok at:3000!');
