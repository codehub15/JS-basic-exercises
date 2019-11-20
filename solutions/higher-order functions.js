// Arrays
// Hight  Order Functions: map(), filter()

// --------------------------------------------------------------

// 1 exercise: sumOfNumbers
console.log("exercise 1: sumOfNumbers");

/*
const sumOfNumbers = nums => {
  let sum = 0;
  nums.map(num => (sum += num));
  console.log("sum", sum);
};

sumOfNumbers([1, 2, 3, 4, 5]); 
*/

// bonus: print sum and product
const sumAndProductOfNumbers = nums => {
  let sum = 0;
  let product = 1;

  nums.map(num => {
    sum += num;
    product *= num;
  });

  console.log("sum:", sum);
  console.log("product:", product);
};

sumAndProductOfNumbers([1, 2, 3, 4, 5]);

// --------------------------------------------------------------

// 2 exercise: Hello
console.log("\nexercise 2: Hello Frien");

let names = ["Alex", "Anna", "Vlada", "Lina", "Nikita"];

const hello = names.map((name, index) => `Hello ${name} at index ${index}`);
console.log(hello);

// --------------------------------------------------------------

// 3 exercise: City Names
console.log("\nexercise 3: City Names");

const cityNames = ["Rom", "Berlin", "Barcelona", "Prague", "Rome"];

const cityNamesToStr = arr => {
  let str = "";
  arr.map(city => {
    str += city + ",";
  });

  return str;
};

console.log(cityNamesToStr(cityNames));

/* 
// another solution
const cityNamesToStr = arr => {
  let str = arr.map(el => arr.join(","));
  return str[0];
};

console.log(cityNamesToStr(cityNames));
*/

// --------------------------------------------------------------

// 4 exercise: Odds and Evens
console.log("\nexercise 4: Odds and Evens");

const oddsAndEvens = nums => {
  return nums.map(el => (el % 2 === 0 ? el - 1 : el + 1));
};

const nums1 = [3, 5, 2, 4]; // expected output: [4, 6, 1, 3]
const nums2 = [6, 9, 10, 20]; // expected output: [5, 10, 9, 19]

console.log(oddsAndEvens(nums1));
console.log(oddsAndEvens(nums2));

// --------------------------------------------------------------

// 5 exercise: Capitalize
console.log("\nexercise 5: Capitalize");

const names2 = ["samuel", "MARIA", "luke", "mary"];

const capitalize = name => {
  return name[0].toUpperCase() + name.substring(1).toLowerCase();
};

const capitalizedInitial = names2.map(capitalize);

console.log(capitalizedInitial);

// --------------------------------------------------------------

// 6 exercise: No Duplicates
console.log("\nexercise 6: No Duplicates");

const collection = [1, 4, 4, 7, 7, 7]; // [1, 4, 7]
const collection2 = [2, 2, 2, 2, 2, 2]; // expected output: [2]
const collection3 = [5, 10, 15, 20, 25]; // expected output: [5, 10, 15, 20, 25]

let unique = collection.filter(
  (value, index, arr) => arr.indexOf(value) === index
);

console.log("unique", unique);

// --------------------------------------------------------------

// 7 exercise: Repeat it
console.log("\nexercise 7: Repeat it");

const repeatItem = (item, times) => {
  /*
  // solution 1 (! return by times 3 just 2 items)
  return Array(times)
    .join(0)
    .split("")
    .map(() => item);
  */

  // solution 2
  return Array(times).fill(item);
};

console.log(repeatItem("example", 3));

// -----------------------------------------------------------

// 8 exercise:  Factors
console.log("\nexercise 8: Factors");

const isFactor = arr => {
  return arr.every((v, i) => v % i === 0);
};

console.log(isFactor([3, 6, 12, 24])); // true
console.log(isFactor([1, 2, 4, 8, 16, 32])); // true
console.log(isFactor([1, 1, 1, 1, 1, 1])); // true
console.log(isFactor([2, 4, 6, 7, 12])); // false
console.log(isFactor([10, 1])); // false
