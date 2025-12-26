const path = require('path');

// prints the file path seperator of my computer
console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

// Access the last file(base) name of the file path
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);