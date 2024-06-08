// Http basics

const http = require("http");
const { createReadStream } = require('fs');

// callback activates everytime user hits the server
const server = http.createServer((req, res) => {
    //here is the universal request response
    console.log("User hit the server");
    if(req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'}); //response header

        //writing the home page via filestream
        const fileStream = createReadStream('./content/index.html', {
            encoding: 'utf8'
        });
    
        fileStream.on('open', () => {
            fileStream.pipe(res); // Piping the data from read stream to response. basically writing each chunk the read stream gets to the response
        });
    
        fileStream.on('error', (err) => {
            console.error(err);
            res.write('Problem with fetching data!');
            res.end();
        });
    }
    else if(req.url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'}); //response header
        res.write('<h1>About Page</h1>'); //response body
        res.end();
    }
    else {
        //Error
        res.writeHead(404, {'content-type': 'text/html'}); // headers
        res.write('<h1>Error: Request Endpoint Not Found</h1>'); // body
        res.end(); // once request body and header have been proccesed res.end method activates and is mandatory
    }
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
});