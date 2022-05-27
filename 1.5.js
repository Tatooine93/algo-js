const readlineSync = require("readline-sync");

let x = readlineSync.question('Can you give me a number with decimals ?');
let y = readlineSync.question('And an other one but without decimals ?');

let result = Math.floor(x) * y;

console.log(result);