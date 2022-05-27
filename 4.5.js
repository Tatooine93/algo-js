const readlineSync = require("readline-sync");

let A = [];
let B = [];

function calcDistance() {
    return Math.sqrt(((B[0]-A[0])**2) + ((B[1]-A[1])**2));
}

let Ax = readlineSync.question('What is the X coordinate of A ?');
A.push(Ax)
let Ay = readlineSync.question('What is the Y coordinate of A ?');
A.push(Ay)
console.log(`coordonnées A ${A}`);

let Bx = readlineSync.question('What is the X coordinate of B ?');
B.push(Bx)
let By = readlineSync.question('What is the Y coordinate of B ?');
B.push(By)
console.log(`coordonnées B ${B}`);

console.log(`The distance between the point A and B is : ${calcDistance()}`);

