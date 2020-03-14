// Section 2: Refresing Next Generation JavaScript
// 20. Reference and Primitive Types Refresher

// PRIMITIVE Types
const number1 = 1;
const number2 = number1; // value is copied
console.log(number2);


// Objects and Arrays use reference copy to assign variables
const person = {
    name: 'Ulder'
};
const anotherPerson = person; // reference copy
person.name = 'Carrilho';
console.log(anotherPerson);

const bird = {
    name: 'Arara'
};
const anotherBird = {...bird}; // value copy
bird.name = 'Águia';
console.log(bird);
console.log(anotherBird);
