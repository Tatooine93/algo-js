
let i = 1;
let nw = 0;
let nf = 0;

while (i <= 100) {
    if (i % 2 == 0) {console.log(i);
    }
    i++;
    nw++;
}

console.log(`number of executions of the while loop: ${nw}`)

for (let i = 1; i <= 100; i++){
    if (i % 2 == 0) {
        console.log(i);
        i++;
    }
    nf++;
} 

console.log(`number of executions of the for loop: ${nf}`)