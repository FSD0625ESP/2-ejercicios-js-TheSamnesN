const reverseString = function(reverseString){
    let reversed = '';
    for (let i = reverseString.length - 1; i >= 0; i--) {
        reversed += reverseString[i];
    }
    return reversed;
}

// Do not edit below this line
module.exports = reverseString;
