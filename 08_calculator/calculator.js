const add = function (a, b) {
    return a + b
};

const subtract = function (a, b) {
    return a - b
};

const sum = function (array) {
    return array.reduce((sum, item) => sum += item, 0)
};

const multiply = function (array) {
    return array.reduce((result, item) => result *= item, 1)
};

const power = function (a, b) {
    return Math.pow(a, b)
};

const factorial = function (number) {
    const array = []
    for (let i = 0; i < number; i++) {
        array[i] = number - i
    }
    return array.reduce((total, item) => total *= item, 1)
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
