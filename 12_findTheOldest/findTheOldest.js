const findTheOldest = function (array) {
    const thisYear = new Date().getFullYear()
    const sortedArray = array.sort((a, b) => {
        const aLived = "yearOfDeath" in a ? a.yearOfDeath - a.yearOfBirth : thisYear - a.yearOfBirth
        const bLived = "yearOfDeath" in b ? b.yearOfDeath - b.yearOfBirth : thisYear - b.yearOfBirth
        return aLived > bLived ? -1 : 1
    })
    return sortedArray[0]
};

// Do not edit below this line
module.exports = findTheOldest;
