let arrNbr = [1,-4,7,12];
let totalPos = 0;

for (let elem of arrNbr) {
    if (elem > 0){
        totalPos = totalPos + elem;
    }
    else {
        continue;
    }
}

console.log(`Le total des nombres positif est: ${totalPos}`);