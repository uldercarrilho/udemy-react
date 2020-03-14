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

// {name} = {name: 'Ulder', age: 38}
// console.log(name);  // Ulder
// console.log(age)    // undefined