// while loop
console.log("#\n while loop");

console.log("\n# 1 --------------------------------------");
// 1 run along
let i = 0;

while (i < 15) {
  console.log(`${i}`);
  ++i;
}

console.log("\n# 2 --------------------------------------");
// 2 city names
let cityNames = ["Berlin", "Paris", "Prague", "Rome"];

while (cityNames.length >= 0) {
  console.log(`${cityNames}`);
  --cityNames;
}

console.log("\n# 3--------------------------------------");
// 3 odds and evens
let numbers = [3, 5, 2, 4];
let index = 0;
console.log("array whit numbers\t", numbers);

while (index < numbers.length) {
  /*   
  // debugging
  console.log(`numbers index:\t\t ${numbers[index]}`);
  console.log(`numbers index +1:\t ${(numbers[index] += 1)}`);
  console.log(`numbers % 2\t\t ${numbers[index] % 2}`);
  console.log(`numbers % 2 === 0\t ${numbers[index] % 2 === 0}`);
  console.log(`typeof numbers[index]\t ${numbers[index] % 2 === 0}`); 
  */

  // check if the element is an even number
  if (numbers[index] % 2 === 0) {
    // decrement value by one
    numbers[index] -= 1;
  } else {
    // increment value by one
    numbers[index] += 1;
  }

  /*  
  // short way whit ternary operator
  numbers[index] % 2 === 0 ? (numbers[index] -= 1) : (numbers[index] += 1); 
 */

  // update
  ++index;
}
console.log("modified numbers:\t", numbers);

/* // odds and evens whit for loop
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log((numbers[i] = numbers[i] - 1));
    numbers[i] = numbers[i] - 1;
  } else {
    console.log((numbers[i] = numbers[i] + 1));
    numbers[i] = numbers[i] + 1;
  }
} */

console.log("\n# do while loop \n");
// do while loop

console.log("# 1 --------------------------------------");
// 1 sumOfNumbers
// Create a program that adds up the numbers in an array (of at least 3 numbers).
let numbs = [1, 2, 3, 4, 5];
let numbIndex = 0;
let sumResult = 0;
console.log("array with numbers:", numbs);
do {
  sumResult += numbs[numbIndex];
  // console.log(sumResult);
  ++numbIndex;
} while (numbIndex < numbs.length);
console.log(`sum of numbers is ${sumResult}`);

console.log("# 2 --------------------------------------");
// 2 Add it up
// Create a program that adds numbers from 1-20 together using a while loop.
let addItUp = 0;
let addIndex = 1;
do {
  // addItUp += addItUp;
  console.log(`inside loop add it up is ${(addItUp += addIndex)}`);
  console.log(`add it up is ${addIndex}`);
  ++addIndex;
} while (addIndex <= 20);
console.log(`outside loop add it up is ${(addItUp += addIndex)}`);

console.log("\n# 3 --------------------------------------");
// 3 Capitalize
// Create a program that capitalizes the first letter of each element in an array of names, using a do while loop.
// Examples: ["matt", "sara", "lara"] ➞ ["Matt", "Sara", "Lara"]
let names = ["matt", "sara", "lara"];
let namesIndex = 0;
let capitalized = [];
console.log(`array with names before: ${names}`);
do {
  let capitalize =
    names[namesIndex][0].toUpperCase() + names[namesIndex].substring(1);

  capitalized.push(capitalize);

  ++namesIndex;
} while (namesIndex < names.length);
console.log(`array with names after: ${capitalized}`);
