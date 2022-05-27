const readlineSync = require("readline-sync");

console.log("Let's play with numbers");

let x = Number(readlineSync.question('Can you give me the value of X ?'));
let y = Number(readlineSync.question('Can you give me the value of Y ?')) ;

console.log("that's an addition:" + (x + y));

console.log("that's a soustraction:" + (x - y));

console.log("that's a multiplication:" + (x * y));

console.log("that's a division:" + (x / y));

console.log("that's a modulo:" + (x % y));

console.log("that's an exponentiation:" + (x ** y));



