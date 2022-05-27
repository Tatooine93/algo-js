const readlineSync = require("readline-sync");

let minAge = readlineSync.question('Give me the minimun age ?');
let maxAge = readlineSync.question('Give me the maximum age ?');

if (minAge > maxAge){
    console.log("Your are a desperate case")
}

else {
    let currentAge = readlineSync.question('Can you give me your age ?');

    if ((currentAge > minAge) && (currentAge < maxAge)){
        console.log(`All right, you are ${currentAge}, right in the age range between ${minAge} and ${maxAge} !!`)
    }
    else {
        console.log("Are your kidding me ?")
    }
}




