const readlineSync = require("readline-sync");

let n = readlineSync.question('Give me a number !');
let total = 0;
let i = 0;

for ( ; i <= n;  i++){
    if (i != n) {
        let inputN = Number (readlineSync.question('Give me a number !'));
        total = total + inputN;
    }

    else {
        console.log( `The total of your ${n} entries is: ${total}`)
    }
}