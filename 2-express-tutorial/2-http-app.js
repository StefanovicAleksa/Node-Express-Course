// Http basics

const http = require("http");
const { readFileSync } = require('fs');

//resource setting up
const homePage = readFileSync('./navbar-app/index.html', {
    encoding: 'utf-8'
});
const homePageCSS = readFileSync('./navbar-app/styles.css', {
    encoding: 'utf-8'
});
const homePageJS = readFileSync('./navbar-app/browser-app.js', {
    encoding: 'utf-8'
});
const logo = readFileSync('./navbar-app/logo.svg', {
    encoding: 'utf-8'
});

const server = http.createServer((req, res) => {
    console.log(`User hit the server at ${req.url}`);
    if(req.url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    }
    else if(req.url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homePageCSS);
        res.end();
    }
    else if(req.url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homePageJS);
        res.end();
    }
    else if(req.url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.write(logo);
        res.end();
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