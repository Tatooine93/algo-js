const readlineSync = require("readline-sync");

let fav = 0;

do {
    let fav = Number (readlineSync.question('What is your favorite number ?'));
    if (fav !== 42) {
        console.log("Are you sure ?");
        continue;
    }
    else {
        console.log("Ok your favorite number is The Universal Answer !!")
        break;
    }
}
while (fav !== 42);