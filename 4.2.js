function rand10(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(rand10(1,10));