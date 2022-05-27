let arrWords = ['hello', 'world', 'this', 'is', 'great'];
let sentence = ``;

for (let elem of arrWords) {
    sentence = sentence + elem + ` `;
}
console.log(sentence);