/*
The Geometrizer

Create 2 functions that calculate properties of a circle, using the definitions here.
Create a function called calcCircumfrence:
Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:
Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
*/

/**
 * two functions: one to calculate circumference and one to calculate area
 * @param {number} radius
 * @returns {string} message
 * @example
 *      calcCircumfrence(5)
 */

// calculate radius
function calcCircumfrence(radius) {
  let circumference = 2 * Math.PI * radius;
  return `The circumference is ${circumference}`;
}

console.log(calcCircumfrence(15));

// calculate area
function calcArea(radius) {
  let area = Math.PI * radius * radius;
  return `The area is ${area}`;
}

console.log(calcArea(5));
