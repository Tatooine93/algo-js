const readlineSync = require("readline-sync");


function askTvSerie() {

    let name = readlineSync.question('What is your favorite TV serie ?');
    let prodYear = readlineSync.question('What is the production year of this serie ?');
    let nbrActor = readlineSync.question('How many actors ?');
    let castMembers = new Array();
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
    
    console.log(castMembers);
    return tvSerie = {
        name,
        prodYear,
        castMembers
    };

};

console.log(askTvSerie());
