const convertToCelsius = function(temp) {
  convertedTemp = (temp - 32) * 5/9;
  return Math.round(convertedTemp * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  convertedTemp = 9/5 * temp + 32;
  return Math.round(convertedTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
