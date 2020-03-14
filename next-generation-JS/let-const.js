// Section 2: Refresing Next Generation JavaScript
// 13. Understanding "let" and "const"

//  'var' deprecated
var name = 'Ulder';
console.log(name);

name = 'Carrilho';
console.log(name);

// use 'let' for variables
let birthday = 1982;
console.log(birthday);

birthday = 2020;
console.log(birthday);

// use 'const' for constants
const CPF = 'fixed';
console.log(CPF);

// TypeError: Assignment to constant variable.
CPF = 'changed';
console.log(CPF);