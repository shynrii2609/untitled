var http = require('http');

http.createServer(function (req, res){
    res.end('Quang Long');
}).listen(process.env.port || 8080);
