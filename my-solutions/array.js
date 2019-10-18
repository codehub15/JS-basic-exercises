// Arrays

// --------------------------------------------------------------

// 1 exercise: sumOfNumbers
console.log("exercise 1: sumOfNumbers");

const sumOfNumbers = nums => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    console.log(`sum at position ${i}: is ${sum}`);
  }
  console.log(`sum in total is ${sum}`);
};
sumOfNumbers([1, 2, 3, 4, 5]); // 15

// --------------------------------------------------------------

// 2 exercise: greeting
console.log("\nexercise 2: greeting");

const greeting = () => {
  let names = ["Alex", "Anna", "Vlada", "Lina", "Nikita"];
  for (let i = 0; i < names.length; i += 1) {
    console.log(`Hello ${names[i]} (${names[i]} is on index ${i} of my array)`);
  }
};
greeting();

// --------------------------------------------------------------

// 3 exercise: City Names
console.log("\nexercise 3: City Names");

const cityName = () => {
  let cities = ["Berlin", "Barcelona", "Prague", "Rome"];
  let joinedCities = cities.join();
  console.log(joinedCities);
};
cityName(); // Berlin,Barcelona,Prague,Rome

// --------------------------------------------------------------

// 4 exercise: Odds and Evens
console.log("\nexercise 4: Odds and Evens");

const oddsAndEvents = arr => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      let elem = (result = arr[i] + 1);
      newArray.push(elem);
    } else {
      let elem = (result = arr[i] - 1);
      newArray.push(elem);
    }
  }
  console.log(newArray);
};
oddsAndEvents([3, 5, 2, 4]); // [4, 6, 1, 3]
oddsAndEvents([6, 9, 10, 20]); // [5, 10, 9, 19]

// --------------------------------------------------------------

// 5 exercise: Capitalize
console.log("\nexercise 5: Capitalize");

const capitalize = names => {
  let modifiedNames = [];
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let capitalizedInitial =
      name[0].toUpperCase() + name.substring(1).toLowerCase();

    modifiedNames.push(capitalizedInitial);
  }
  console.log(modifiedNames);
};

capitalize(["samuel", "MARIA", "luke", "mary"]); // ["Samuel", "Maria", "Luke", "Mary"]

// --------------------------------------------------------------

// 6 exercise: No Duplicates
console.log("\nexercise 6: No Duplicates");

const removeDuplicates = collection => {
  let noDuplicates = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] !== collection[i + 1]) {
      let elem = collection[i];
      noDuplicates.push(elem);
    }
  }
  console.log(noDuplicates);
};
removeDuplicates([1, 4, 4, 7, 7, 7]); // [ 1, 4, 7 ]
removeDuplicates([1, 6, 6, 9, 9]); // [1, 6, 9]
removeDuplicates([2, 2, 2, 2, 2, 2]); //  [2]
removeDuplicates([5, 10, 15, 20, 25]); // [5, 10, 15, 20, 25]

// --------------------------------------------------------------

// 7 exercise: No Duplicates
console.log("\nexercise 7: Repeat it");

const repeatStr = (str, repeatNum) => {
  var repeatWords = [];
  for (let i = 0; i < repeatNum; i++) {
    repeatWords.push((repeatNum[i] = str));
  }
  console.log(repeatWords);
};
repeatStr("example", 3); //  ["example", "example", "example"]

// --------------------------------------------------------------

// 8 exercise: Factors
console.log("\nexercise 8: Factors");

const factor = nums => {
  console.log("nums:", nums);
  let isFactor = true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i] % nums[i - 1] === 0) {
      isFactor = true;
    } else {
      isFactor = false;
    }
  }
  console.log(isFactor);
  console.log("-------");
};
factor([3, 6, 12, 36]); // true
factor([1, 2, 4, 8, 16, 32]); // true
factor([1, 1, 1, 1, 1, 1]); // true
factor([2, 4, 6, 7, 12]); // false
factor([10, 1]); // false
