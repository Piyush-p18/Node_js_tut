const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url);

    res.setHeader('content-type','text/html');

    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }
    else if(req.url == '/pk'){
        res.statusCode = 200;
        const data2 = fs.readFileSync('pk.html');
        res.end(data2.toString());
    }
    else if(req.url == '/about'){
        const data3 = fs.readFileSync('about.html');
        res.statusCode = 200;
        res.end(data3.toString());
    }
    else{
        // res.pk();
        res.statusCode = 404;
        res.end('<h1>NOT FOUND</h1><p>Wrong url, Please check the url</p>');
    }
});

server.listen(port,()=>{
    console.log(`The server is listening at the port ${port}`);
});
