// for loop

// 1 Addition
console.log(`\n# 1`);
const exercise1 = () => {
  let result = 0;
  for (let i = 0; i <= 20; i += 1) {
    result += i;
    console.log(`${i}: result is ${result}`);
  }
  console.log(`result is ${result}`);
};
exercise1();

// 2 There are i bottles of beer on the wall
console.log(`\n# 2`);
const exercise2 = () => {
  let numbers = ["one", "two", "three", "four", "five"];
  for (let i = 0; i < 5; i += 1) {
    console.log(`There is one bottle of beer on the wall ${numbers[i]}`);
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

    // better way without variable result
    // console.log(`${i} * 9 = ${i * 9}`);
  }
};
exercise4();

// bonus
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
    result += 1;
    if (result < 1000) {
      result = i * 3;
      console.log(`* 3 ${result}`);
    }
    if (result < 1000) {
      result = i * 5;
      console.log(`* 5 ${result}`);
    }
  }
};
exercise7();

// 8
console.log(`\n# 8`);
const exercise8 = () => {
  let names = ["Alex", "Anna", "Vlada", "Nikita", "Alina"];
  for (let i = 0; i < names.length; i += 1) {
    console.log(`Hallo ${names[i]}`);
  }
};
exercise8();

// 9 bonus for exercise 9
console.log(`\n# bonus for 8`);
const bonusFor8 = () => {
  let names = ["Alex", "Pavel", "Anna", "Vlada", "Sofia", "Nikita", "Lida"];
  for (let i = 0; i < names.length; i += 1) {
    console.log(`${names[i]} is on index ${i}`);
  }
};
bonusFor8();

// 9
console.log(`\n# 9`);
const exercise9 = () => {
  let result = 0;
  // 1
  console.log(`\n# 1`);
  for (let i = 1; i <= 10; i += 1) {
    result = i * 100;
    console.log(`${result}`);
  }
  // 2
  console.log(`\n# 2`);
  for (let i = 1; i <= 8; i += 1) {
    result = (i += 1) * 2;
    console.log(`${result}`);
  }
  // 3
  console.log(`\n# 3`);
  for (let i = 0; i <= 5; i += 1) {
    result = i * 2;
    console.log(`${result}`);
  }
  // 4
  console.log(`\n# 4`);
  for (let i = 1; i <= 5; i += 1) {
    result = i * 3;
    console.log(`${result}`);
  }
  // 5
  console.log(`\n# 5`);
  for (let i = 9; i >= 0; i -= 1) {
    console.log(`${i}`);
  }
};
exercise9();
