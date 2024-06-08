const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const fileStream = fs.createReadStream('./content/big.txt', {
        encoding: 'utf8'
    });

    fileStream.on('open', () => {
        fileStream.pipe(res); // Piping the data from read stream to response
    });

    fileStream.on('error', (err) => {
        console.error(err);
        res.end('Problem with fetching data!');
    });
});

server.listen(5000, () => {
    console.log('Server listening on port: 5000...')
});