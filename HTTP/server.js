const path = require('path');
const fs = require('fs');
const http=require('http');
const server = http.createServer(function(req, res)
{
    for(let i=0;i<10;i++)
    {
        if (req.url === ('/' + i))
        {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('this is page #' + i);
        }

    }
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end(req.url);
});
server.listen(8081);