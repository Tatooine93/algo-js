class Person {

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    get getName() {
        return `${this.firstname} ${this.lastname}`;
    }

    set setName (val) {
        let arrName = val.split(" ");
        this.firstname = arrName[0];
        this.lastname = arrName[1];
    }
}

let John = new Person ("Johny", "Cash");

console.log(John.getName);

console.log(John.setName);
