const palindromes = function (expression) {
    const punctuation = [" ", ".", ",", "!", "?", ":", ";", "`", "'"]
    const strippedExpression = []
    for (let i = 0; i < expression.length; i++) {
        if (!punctuation.includes(expression[i])) {
            strippedExpression.push(expression[i].toLowerCase())
        }
    }
    const reversedExpression = strippedExpression.toReversed()
    for (let i = 0; i < expression.length; i++) {
        if (strippedExpression[i] !== reversedExpression[i]) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
palindromes("ZZZZ car, a man, a maracaz.")