const readlineSync = require("readline-sync");

let name = readlineSync.question('Can you give me your name ?');
let firstName = readlineSync.question('Can you give me your first name ?');
let city = readlineSync.question('Can you give me the name of your city?');

console.log(`Your name is ${name} ${firstName} and you live in ${city}`);