const fibonacci = function(i) {
     
    i = parseInt(i);

    if(i <= 0)
        return "OOPS";
 
    if (i === 1 || i ===2) return 1;

     return fibonacci (i - 1) + fibonacci (i - 2);

};
console.log ()
// Do not edit below this line
module.exports = fibonacci;
