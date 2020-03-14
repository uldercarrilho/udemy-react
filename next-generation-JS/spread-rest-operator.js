// Section 2: Refresing Next Generation JavaScript
// 18. The Spread & Rest Operator

// SPREAD
// Used to split up array elements OR objects properties

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

const person = {
    name: 'Ulder'
};
const newPerson = {
    ...person,
    age: 38
};
console.log(newPerson);


// REST
// Used to merge a list of function arguments into an array
const evenNumbers = (...args) => {
    return args.filter(elem => elem % 2 == 0);
}
console.log(evenNumbers(1, 2, 3, 4, 5));
