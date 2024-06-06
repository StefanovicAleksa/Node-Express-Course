// FS Module (File Module) - ASync

const { readFile, writeFile } = require('fs');

console.log('start');

// Async uses callback + callback hell example
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.error(err);
        return
    }
    const first = result;

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.error(err);
            return
        }
        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result ${first}\n${second}`,
            (err, result) => {
                if(err) {
                    console.error(err);
                    return
                }
                console.log('done with the task');
            },
            {flag: 'a'}
        );
    });
});

console.log('starting the next one');