const readlineSync = require("readline-sync");

let castMembers = new Array();
let tvSerie = {};

function askTvSerie() {

    let name = readlineSync.question('What is your favorite TV serie ?');
    let prodYear = readlineSync.question('What is the production year of this serie ?');
    let nbrActor = readlineSync.question('How many actors ?');
    
    let tvSerie = {};
    

    for ( let i = 1; i <= nbrActor; i++) {
        let actorFirstname = readlineSync.question(`Actor's firstname ?`);
        let actorName = readlineSync.question(`Actor's name ?`);

        let actor = {
            actorFirstname,
            actorName
        }

        castMembers.push(actor);
    }
    
    return tvSerie = {
        name,
        prodYear,
        castMembers
    };
};



function randomizeCast(tvSerie) {
    
    let newCast = new Array();
    let n = Math.floor(Math.random() * castMembers.length);

    for (let i = 1; i <= n; i++) {
        
        newCast.push(Math.floor(Math.random() * items.length));
    }
    
    return newCast;
}

console.log(randomizeCast(tvSerie));
