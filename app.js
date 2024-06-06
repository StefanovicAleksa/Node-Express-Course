// Event Emitter -> server

const http = require('http');

// Setting up server using event emitter api
// Server is now an event listener and is treated as such
const server = http.createServer();

// handling requests
server.on('request', (req, res) => {
    res.end('Welcome');
});

server.listen(5000, () => {
    console.log("Server listening on port: 5000...");
});