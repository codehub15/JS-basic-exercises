// 1
console.log("# 1");
let firstName = "Natalia";
let secondName = "Alexandra";
console.log(firstName, secondName);
console.log("\n");

// 2
console.log("# 2 ------------------------");
let name = "Alex";
let age = 35;
let city = "Berlin";
let job = "Web Developer";
let hobby = "Sport";
//console.log(name, "is a", job, "from", city,". He is", age, "and his hobby is",hobby);
console.log(name, job, city, age, hobby);
console.log("\n");

// 3
console.log("# 3 ------------------------");
let nameJohnSmith = "John Smith";
let ageJohnSmith = 43;
let jobJohnSmith = "teacher";
console.log(
  nameJohnSmith +
  " is a " +
  ageJohnSmith +
  " year old " +
  jobJohnSmith +
  " who lives in Berlin"
);
console.log(
  name +
  " is a " +
  job +
  " from " +
  city +
  ". He is " +
  age +
  " and his hobby is " +
  hobby +
  "."
);
console.log("\n");

// 4
console.log("# 4 ------------------------");
let length = 16.78;
let lastName2 = "Johnson";
let car = "";
let isOpen = true;
console.log(typeof length); // number
console.log(typeof lastName2); // string
console.log(typeof car); // string
console.log(typeof isOpen); // boolean
console.log("\n");

// 5
console.log("# 5 ------------------------");
let ageMark = "30";
let ageJohn = 30;
console.log("type of Mark's age ", typeof ageMark); // string
console.log("type of John's age ", typeof ageJohn); // number
console.log("\n");

// 6
console.log("# 6 ------------------------");
let johnAge = 35;
let markAge = 30;
let isJohnOlder = johnAge > markAge;
console.log("John is older than Mark: " + isJohnOlder);
console.log("\n");

// 7
console.log("# 7 ------------------------");
let a = 3;
let b = 5;
let c = 7;
console.log("a > b ", a > b);
console.log("a < b ", a < b);
console.log("a > c ", a > c);
console.log("a < c ", a < c);
console.log("b > c ", b > c);
console.log("b < c ", b < c);
console.log("a === b ", a === b);
console.log("a === c ", a === c);
console.log("b === c ", b === c);
console.log("\n");

// 8
console.log("# 8 ------------------------");
let programmingLanguage = "JavaScript";
let isFun = true;
console.log(programmingLanguage + " is fun: " + isFun);
console.log("\n");

// 9
console.log("# 9 -------------------------");
let test;
console.log("type of test: " + typeof test);
// The type of variable test is undefined because the variable is just defined, but not assigned with any value
console.log("\n");

// 10
console.log("# 10 ------------------------");
let calculation = 5 + 2;
console.log(calculation);
