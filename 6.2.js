class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;  
    }
    
    sayHello() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
}

let Antoine = new Person ("Antoine", "Nowak");


Antoine.sayHello();