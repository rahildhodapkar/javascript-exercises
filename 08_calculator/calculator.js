const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(nums) {
	return nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
};

const multiply = function(nums) {
  return nums.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  });
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
	total = 1;
  for (let i = 1; i <= x; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
