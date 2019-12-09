/* The Temperature Converter

Create a function called celsiusToFahrenheit:

    Store a celsius temperature into a variable.
    Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:

    Now store a fahrenheit temperature into a variable.
    Convert it to celsius and output "NN°F is NN°C."
*/

/**
 *  two functions to convert celsius to fahrenheit and fahrenheit to celsius
 * @param {number} celsius
 * @param {number} fahrenheit
 * @return {string} message
 * @example
 *      celsiusToFahrenheit(20)
 *  and fahrenheitToCelsius(20)
 *
 */

// convert celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
  let convertCelsius = (celsius * 9) / 5 + 32;
  return `${celsius}°C is ${convertCelsius}°F`;
}

console.log(celsiusToFahrenheit(20));

// convert fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
  let convertFahrenheit = ((fahrenheit - 32) / 9) * 5;
  return `${fahrenheit}°F is ${convertFahrenheit}°C`;
}

console.log(fahrenheitToCelsius(20));
