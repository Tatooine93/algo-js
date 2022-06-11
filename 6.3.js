class Animal {

    constructor(name) {
        this.name = name;
        
    }

    sayHello() {
        return `${this.greeting}! I'm ${this.name}!`;
    }
}

class Cat extends Animal {
    static greeting = "Miaou";
}
    

class Dog extends Animal {
    static greeting = "Wouf"
}

let cat1 = new Cat ("Skitty");
let dog1 = new Dog ("Doggy");


console.log(cat1.sayHello());
console.log(dog1.sayHello());


