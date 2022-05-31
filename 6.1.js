class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk () {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
}

let Skitty = new Cat ("Skitty", 9);
let Pixel = new Cat ("Pixel", 6);

Skitty.talk();
Pixel.talk();