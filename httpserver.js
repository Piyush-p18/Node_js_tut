const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url);

    res.statusCode = 200;
    res.setHeader('content-type','text/html');
    res.end('<h1>Server 1 Website  - Piyush kumar</h1><p>This ia the first website made by the great Piyush kumar</p>');
});

server.listen(port,()=>{
    console.log(`The server is listening at the port ${port}`);
});
