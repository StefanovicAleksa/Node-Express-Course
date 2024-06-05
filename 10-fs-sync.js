// FS Module (File Module) - Sync

const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result ${first}\n${second}`,
    { flag: 'a' } //method for example append
);

console.log('done with the task');
console.log('starting the next one');