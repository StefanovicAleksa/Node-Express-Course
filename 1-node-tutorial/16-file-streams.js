// Streams -> Files

const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', { 
    highWaterMark: 9000, //chunck size in bytes default 64kb
    encoding: 'utf-8' 
});

// using creating event listener for stream object on data
// each data event coresponds to one chunk being read one chunk is max 64kb
// other events error, open, close
stream.on('data', (chunk) => {
    console.log(chunk);
});