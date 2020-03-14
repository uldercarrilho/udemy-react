// Section 2: Refresing Next Generation JavaScript
// 21. Refreshing Array Functions

const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);

console.log(numbers);
console.log(doubled);


// Array.prototype.map()
//
// The map() method creates a new array populated with the results of calling a 
// provided function on every element in the calling array.
// -----------------------------------------------------------------------------
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]


// Array.prototype.find()
//
// The find() method returns the value of the first element in the provided array 
// that satisfies the provided testing function.
// -----------------------------------------------------------------------------
const array2 = [5, 12, 8, 130, 44];
const found = array2.find(element => element > 10);
console.log(found);
// expected output: 12
