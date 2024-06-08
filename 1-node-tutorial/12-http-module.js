// HTTP Module

const http = require('http');

// Http server setup
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Welcome to our home page');
        res.end();
    }
    else if(req.url === '/about') {
        res.write('Welcome to our aboutt page');
        res.end();
    }
    else {
        res.write(`
        <h1>Oops!</h1>
        <p>We can't find the page that you were looking for!</p>
        <a href="/">Back Home</a>
        `);
        res.end();
    }
    
});

// Setting server to run on the port (5000 for example)
server.listen(5000);