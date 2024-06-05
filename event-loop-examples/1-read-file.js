// Event Loop Code Example

const { readFile } = require('fs');

console.log("queing reading task");

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log("reading task complete");
});

console.log("starting next task");