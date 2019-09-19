// for loop

// 1 Addition
console.log(`\n# 1`);
const exercise1 = () => {
  let result = 0;
  for (let i = 0; i <= 20; i += 1) {
    result += i;
    console.log(`${i}: result is ${result}`);
  }
  console.log(`end result is ${result}`);
};
exercise1();

// 2 There are i bottles of beer on the wall
console.log(`\n# 2`);
const exercise2 = () => {
  let numbers = ["one", "two", "three", "four", "five"];
  for (let i = 0; i < 5; i += 1) {
    switch (numbers[i]) {
      case "one":
        console.log(`There is ${numbers[i]} bottle of beer on the wall`);
      case "two":
      case "three":
      case "four":
      case "five":
        console.log(`There are ${numbers[i]} bottles of beer on the wall`);
        break;
    }
  }
};
exercise2();

// 3 The odd/even reporter
console.log(`\n# 3`);
const exercise3 = () => {
  for (let i = 1; i <= 20; i += 1) {
    if (i % 2 === 0) {
      console.log(`The ${i} is even`);
    } else {
      console.log(`The ${i} is odd`);
    }
  }
};
exercise3();

// 4 Multiplication Tables
console.log(`\n# 4`);
const exercise4 = () => {
  let result = 0;

  for (let i = 0; i <= 10; i += 1) {
    result = i * 9;
    console.log(`${i} * 9 = ${result}`);

    // shorter without variable result
    // console.log(`${i} * 9 = ${i * 9}`);
  }
};
exercise4();

// bonus for exercise 4
// nested for loop to show the tables for every multiplier from 1 to 10
console.log(`\n# bonus for exercise 4`);
const bonusFor4 = () => {
  for (let i = 1; i <= 10; i += 1) {
    console.log();
    for (let j = 1; j <= 10; j += 1) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
};
bonusFor4();

// 5 Grades
console.log(`\n# 5`);
const exercise5 = () => {
  let grades = [90, 60, 77, 81, 65];
  let average = 0;
  for (let i = 0; i < grades.length; i += 1) {
    average = (grades[i] + grades[i]) / grades.length;
  }
  console.log(`The average of grades ${grades} is ${average}`);
};
exercise5();

// 6 Fizz Buzz
console.log(`\n# 6`);
const exercise6 = () => {
  for (let i = 0; i <= 100; i += 1) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`Fizz \t\t * 3 = ${i}`);
    } else if (i % 5 == 0) {
      console.log(`Buzz \t\t * 5 = ${i}`);
    } else if (i % 3 == 0) {
      console.log(`FizzBuzz \t 3 and 5 = ${i}`);
    } else {
      console.log(`\t\t ${i}`);
    }
  }
};
exercise6();

// 7 Sum of Multiples
console.log(`\n# 7`);
const exercise7 = () => {
  let result = 0;
  for (let i = 0; i <= 1000; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += i;
    }
  }
  console.log(`${result}`);
};
exercise7();

// 8  loop over the array / traverse through the array
console.log(`\n# 8`);
const exercise8 = () => {
  let names = ["Alex", "Anna", "Vlada", "Kristina", "Nikita"];
  for (let i = 0; i < names.length; i += 1) {
    console.log(`Hallo ${names[i]}`);
  }
};
exercise8();

// bonus for exercise 8
// print the indexes of each item in the array
console.log(`\n# bonus for exercise 8`);
const bonusFor8 = () => {
  let names = ["Alex", "Anna", "Vlada", "Kristina", "Nikita"];
  for (let i = 0; i < names.length; i += 1) {
    console.log(`${names[i]} is on index ${i}`);
  }
};
bonusFor8();

// 9
console.log(`\n# 9`);
// 9.1
console.log(`# 9.1`);
const exercise9a = () => {
  let result = "";
  for (let i = 1; i <= 10; i += 1) {
    result += i * 100 + " ";
  }
  console.log(`${result}`);
};
exercise9a();

// 9.2
console.log(`\n# 9.2`);
const exercise9b = () => {
  let str = "";
  let result = 1;

  for (let i = 1; i <= 8; i += 1) {
    str += result + " ";
    result *= 2;
  }
  console.log(`${str}`);
};
exercise9b();

// 9.3
console.log(`\n# 9.3`);
const exercise9c = () => {
  let result = "";
  for (let i = 0; i <= 5; i += 1) {
    result += i * 2 + " ";
  }
  console.log(`${result}`);
};
exercise9c();

// 9.4
console.log(`\n# 9.4`);
const exercise9d = () => {
  let result = "";
  for (let i = 1; i <= 5; i += 1) {
    result += i * 3 + " ";
  }
  console.log(`${result}`);
};
exercise9d();

// 9.5
console.log(`\n# 9.5`);
const exercise9e = () => {
  let result = "";
  for (let i = 9; i >= 0; i -= 1) {
    result += i + " ";
  }
  console.log(`${result}`);
};
exercise9e();

// 10 isPalindrome
console.log(`\n# 10`);
const exercise10 = param => {
  let palindrome = param.toLowerCase();
  let isPalindrome = false;

  for (let i = 0; i < palindrome.length; i += 1) {
    if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
      isPalindrome = false;
      return `Is ${palindrome} a palindrome? ${isPalindrome}`;
    }
  }
  isPalindrome = true;
  return `Is ${palindrome} a palindrome? ${isPalindrome}`;
};
console.log(exercise10("madam"));
console.log(exercise10("madame"));
