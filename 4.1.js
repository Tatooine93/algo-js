const readlineSync = require("readline-sync");

function calcSurface() {
    return length * width;
}

let length = readlineSync.question('Can you give me the length of the rectangle ?');
let width = readlineSync.question('Can you give me the width of the rectangle ?');

console.log(`The surface of the rectangle is ${calcSurface()}`);