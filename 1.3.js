const readlineSync = require("readline-sync");

let name = readlineSync.question('Can you give me your name ?');

console.log("Hello " + name);