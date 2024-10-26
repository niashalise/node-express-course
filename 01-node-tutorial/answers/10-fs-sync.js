const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

writeFileSync('./temporary/fileA.txt', `Here is the result ${first}, ${second}`, {flag: 'a'});

const updated = readFileSync('./temporary/fileA.txt', 'utf8');
console.log(`This is the updated information: ${updated}`);