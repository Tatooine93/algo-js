const readlineSync = require("readline-sync");

function factorial() {
    if(a == 0 || a == 1){
        return 1;
    }
    else{
        return a * factorial(a-1);
    }
}

let a = readlineSync.question('Give me a number !!');
console.log(`This is his factorial: ${factorial()}`)