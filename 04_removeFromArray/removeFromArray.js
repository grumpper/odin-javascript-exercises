const removeFromArray = function (givenArray, ...givenValues) {
    let result = []
    for (let element of givenArray) {
        if (!givenValues.includes(element)) {
            result.push(element)
        }
    }
    return result
};

// Do not edit below this line
module.exports = removeFromArray;
