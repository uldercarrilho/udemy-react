// Section 2: Refresing Next Generation JavaScript
// 17. Classes, Properties and Methods

class Human {
    // Properties are like "variables attached to classes/objects"
    gender = 'undefined';

    // methods are like "functions attached to classes/objects"
    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Ulder';
    gender = 'male'

    printName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printName();
person.printGender();