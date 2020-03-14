// Section 2: Refresing Next Generation JavaScript
// 16. Understanding classes

class Human {
    constructor() {
        this.gender = 'undefined';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    // o método construtor é opcional
    constructor() {
        // precisa chamar super() a classe for herança
        super();
        this.name = 'Ulder';
        this.gender = 'male'
    }

    printName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printName();
person.printGender();