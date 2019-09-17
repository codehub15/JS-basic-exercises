// while loop

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
