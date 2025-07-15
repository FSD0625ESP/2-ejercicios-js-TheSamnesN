const sumAll = function(num1, num2) {
  const num1IsValid = typeof num1 === "number";
  const num2IsValid = typeof num2 === "number";

  if (num1 < 0 || num2 < 0 || !num1IsValid || !num2IsValid) {
    return "ERROR";
  }
  
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;

// Do not edit below this line
module.exports = sumAll;
