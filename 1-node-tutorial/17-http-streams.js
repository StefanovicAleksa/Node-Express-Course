// Streams -> File to Http

const http = require('http');
const fs = require('fs');

// Using file streams than filesync for reading/writing large files is better because the data is chunkedt 
http.createServer((req, res) => {
    const fileStream = fs.createReadStream('./content/big.txt', {
        encoding: 'utf8'
    });

    fileStream.on('open', () => {
        fileStream.pipe(res); // Piping the data from read stream to response. basically writing each chunk the read stream gets to the response
    });

    fileStream.on('error', (err) => {
        console.error(err);
        res.end('Problem with fetching data!');
    });
});

http.listen(5000, () => {
    console.log('Server listening on port: 5000...')
});