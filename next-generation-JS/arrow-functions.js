// Section 2: Refresing Next Generation JavaScript
// 14. Arrow functions

function NormalFunction() {
    console.log('NormalFunction');
}

function NormalFunctionWithParameter(name) {
    console.log('NormalFunctionWithParameter', name);
}

const ArrowFunctionWithoutParameters = () => {
    console.log('ArrowFunctionWithoutParameters');
}

const ArrowFunctionWithOneParameter = (name) => {
    console.log('ArrowFunctionWithOneParameter', name);
}

const ArrowFunctionWithOneParameterSimplified = name => {
    console.log('ArrowFunctionWithOneParameterSimplified', name);
}

const ArrowFunctionWithTwoParameter = (name, age) => {
    console.log('ArrowFunctionWithTwoParameter', name, age);
}

const ArrowFunctionReturn = (number) => {
    return number * 2;
}

// se a função tem apenas uma instrução de retorno, pode escrever na forma simplificada
const ArrowFunctionReturnSimplified = number => number * 2;


NormalFunction();
NormalFunctionWithParameter('Ulder');
ArrowFunctionWithoutParameters();
ArrowFunctionWithOneParameter('Carrilho');
ArrowFunctionWithOneParameterSimplified('Junior');
ArrowFunctionWithTwoParameter('Ulder', 38);
console.log(ArrowFunctionReturn(2));
console.log(ArrowFunctionReturnSimplified(3));