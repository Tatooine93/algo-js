const readlineSync = require("readline-sync");

let x = readlineSync.question('Can you give me a number?');
let y = readlineSync.question('And an other one ?');

let result = x % y;

console.log(result);