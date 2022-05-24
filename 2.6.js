const readlineSync = require("readline-sync");

let day = readlineSync.question('Give me a number between 1 and 7 !');

switch (day) {
    case "1":
        console.log("that's Monday");
        break;

    case "2":
        console.log("that's Tuesday");
        break;

    case "3":
        console.log("that's Wednesday");
        break;

    case "4":
        console.log("that's Thursday");
        break;

    case "5":
        console.log("that's Friday");
        break;

    case "6":
        console.log("that's Saturday");
        break;

    case "7":
        console.log("that's Sunday");
        break;

    default:
        console.log("Sorry we are out of week's days !");
    
}