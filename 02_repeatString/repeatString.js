const repeatString = function(text, numTimes) {
    if (numTimes < 0) {
        return 'ERROR';
    }
    return text.repeat(numTimes);
};

// Do not edit below this line
module.exports = repeatString;