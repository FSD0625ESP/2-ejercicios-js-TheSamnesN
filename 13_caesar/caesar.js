const caesar = function(text, shift) {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        let code = char.charCodeAt(0);

      
        if (code >= 65 && code <= 90) {
           
            let base = 65;
            let newCode = ((code - base + shift + 26) % 26) + base;
            result += String.fromCharCode(newCode);
        }
     
        else if (code >= 97 && code <= 122) {
           
            let base = 97;
            let newCode = ((code - base + shift + 26) % 26) + base;
            result += String.fromCharCode(newCode);
        }
        
        else {
            result += char; 
        }
    }

    return result;
};


// Do not edit below this line
module.exports = caesar;
