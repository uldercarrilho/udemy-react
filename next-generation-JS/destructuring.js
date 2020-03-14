// Section 2: Refresing Next Generation JavaScript
// 19. Destructuring

// Easily extract array elements or objects properties and store them in variables

// ARRAY DESTRUCTURING

const numbers = [1, 2, 3];
[n1, n2] = numbers;
console.log(n1, n2);

[num1, , num3] = numbers;
console.log(num1, num3);


// OBJECT DESTRUCTURING

const {name} = {name: 'Ulder', age: 38}
console.log(name);  // Ulder
// console.log(age);   // ReferenceError: age is not defined


const printName = (personObj) => {
    console.log(personObj.name);
}
printName({name: 'Ulder', age: 38});


const printName2 = ({name}) => {
    console.log(name);
}
printName2({name: 'Ulder', age: 38});