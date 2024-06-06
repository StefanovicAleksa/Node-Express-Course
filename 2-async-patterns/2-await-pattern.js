// Async & Await

const { readFile, writeFile } = require('fs'); //using let because it will be changed after

// Promise manual
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// using async & await
const startPromiseManual = async() => {
    try {
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        console.log(first, second);
    } catch(err) {
        console.error(err);
    }
}

// Turning function into promise with util.promisify
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// using async & await
const startPromisify = async() => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf-8');
        const second = await readFilePromise('./content/second.txt', 'utf-8');
        await writeFilePromise('./content/mind-grenade.txt', first + "\n" + second);
        console.log(first, second);
    } catch(err) {
        console.error(err);
    }
}

// Importing functions as promises
const fs = require('fs').promises; // destructor syntax can also be used

// using async & await
const start = async() => {
    try {
        const first = await fs.readFile('./content/first.txt', 'utf-8');
        const second = await fs.readFile('./content/second.txt', 'utf-8');
        await fs.writeFile('./content/mind-grenade.txt', first + "\n" + second, {flag: 'a'});
        console.log(first, second);
    } catch(err) {
        console.error(err);
    }
}

start();