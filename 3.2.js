let arrOne = [1, 2, 3, 4, 5];
let arrTwo = [100, 101, 102];
let totalOne = 0;
let totalTwo = 0;

for (let elem of arrOne) {
    totalOne = totalOne + elem;
}
console.log(`Le total de l'array One est de: ${totalOne/arrOne.length}`);

for (let elem of arrTwo) {
    totalTwo = totalTwo + elem;
}
console.log(`Le total de l'array Two est de: ${totalTwo/arrTwo.length}`);