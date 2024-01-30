const sumAll = function (arg1, arg2) {
    for (let arg of [arg1, arg2]) {
        if (arg < 0 || typeof arg !== "number") {
            return "ERROR"
        }
    }
    let start, stop, result = 0
    if (arg2 >= arg1) {
        start = arg1
        stop = arg2
    } else {
        start = arg2
        stop = arg1
    }
    for (let i = start; i <= stop; i++) {
        result += i
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;

sumAll(-5, "test")