const readlineSync = require("readline-sync");

function rand10(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let arr = [];

function multiRand() {
    for (let i = 1; i <= n; i++) {
        arr.push(rand10(1,10));
    }
    return arr;
}

let n = readlineSync.question('How many random number do you want ?');

console.log(multiRand())