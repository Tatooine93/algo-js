const readlineSync = require("readline-sync");

let total =0;
let arr = [];

function rand10(){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function multiRand() {
    for (let i = 1; i <= n; i++) {
        arr.push(rand10(1,10));
    }
    return arr;
}

function average() {
for (let elem of arr) {
        total = total + elem;
    }
    return total/arr.length;
}

function min() {
    return Math.min(...arr);
}

function max() {
    return Math.max(...arr);
}


let n = readlineSync.question('How many random number do you want ?');

console.log(multiRand())
console.log(`The array average is ${average(arr)}, his max is ${max(arr)}, and his min is ${min(arr)}`)


