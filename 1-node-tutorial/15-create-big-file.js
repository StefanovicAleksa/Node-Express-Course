// Streams

const { writeFile } = require('fs').promises;

const writeBigFileAsync = async() => {
    for(let i = 0; i < 100000; i++) {
        try {
            await writeFile('./content/big.txt', `hello world ${i}\n`, { 'flag': 'a'});
        }
        catch(err) {
            console.error(err);
        }
    }
}

writeBigFileAsync();