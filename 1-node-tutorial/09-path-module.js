// Path Module

const path = require('path');

// Platform specific separator for folders. (For Windows \)
console.log(path.sep);

// normalized path to file
const filePath = path.join('/content/', '//subfolder', 'test.txt');
console.log(filePath);

// Base file inside the filePath
const base = path.basename(filePath)
console.log(base);

// Absolute Path
const absoulte = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absoulte);

// Note difference between join and resolve is that resolve cuts out the pathnames with extra letters like // but join doesnt example the normalized path to file(part of the code) with resolve wouldnt work