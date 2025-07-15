const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numbers) {
  if (!Array.isArray(numbers)) return 0;

  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
};

const multiply = function(numbers) {
  if (!Array.isArray(numbers)) return 0;

  let product = 1;
  for (let num of numbers) {
    product *= num;
  }
  return product;
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(n) {
  if (n === 0) return 1;

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// No editar debajo de esta línea
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
