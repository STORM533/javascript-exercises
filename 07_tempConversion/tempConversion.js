const convertToCelsius = function(temp) {
celsius = (temp -32) *(5/9);
let roundoff = Math.round(celsius *10)/10;
return roundoff;
};

const convertToFahrenheit = function(temp) {
  fahrenheit = (temp *(9/5)) + 32;
  let roundoff = Math.round(fahrenheit *10)/10;
return roundoff;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
