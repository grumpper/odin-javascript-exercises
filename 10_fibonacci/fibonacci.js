const fibonacci = function (index) {
    const intIndex = parseInt(index)
    if (intIndex < 0) {
        return "OOPS"
    }
    const sequence = []
    for (let i = 0; i <= intIndex; i++) {
        if (i < 2) {
            sequence.splice(i, 0, i)
        } else {
            sequence.splice(i, 0, sequence[i - 1] + sequence[i - 2])
        }
    }
    return sequence[intIndex]
};

// Do not edit below this line
module.exports = fibonacci;