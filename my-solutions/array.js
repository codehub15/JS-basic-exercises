// Loops Using Arrays

// --------------------------------------------
// 1 exercise: sumOfNumbers
console.log("exercise 1: sumOfNumbers");

const sumOfNumbers = nums => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    console.log(`sum at position ${i}: is ${sum}`);
  }
  return `sum in total is ${sum}`;
};
console.log(sumOfNumbers([1, 2, 3, 5]));

// --------------------------------------------
// 2 exercise: greeting
console.log("\nexercise 2: greeting");

const exercise2 = () => {
  let names = ["Alex", "Anna", "Vlada", "Lina", "Nikita"];
  for (let i = 0; i < names.length; i += 1) {
    console.log(`Hello ${names[i]} (${names[i]} is on index ${i} of my array)`);
  }
};
exercise2();

// ------------------------------------------
// 3 exercise: City Names
console.log("\nexercise 3: City Names");

const exercise3 = () => {
  let cities = ["Berlin", "Barcelona", "Prague", "Rome"];
  let joinedCities = cities.join();
  console.log(joinedCities);
};
exercise3();

// ------------------------------------------
// 4 exercise: Odds and Evens
console.log("\nexercise 4: Odds and Evens");

const exercise4 = arr => {
  let invertedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      let elem = (result = arr[i] + 1);
      invertedArray.push(elem);
    } else {
      let elem = (result = arr[i] - 1);
      invertedArray.push(elem);
    }
  }
  console.log(invertedArray);
};
exercise4([3, 5, 2, 4]);
exercise4([6, 9, 10, 20]);

// ------------------------------------------
// 5 exercise: Capitalize
console.log("\nexercise 5: Capitalize");

const exercise5 = names => {
  let modifiedNames = [];
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let capitalizedInitial =
      name[0].toUpperCase() + name.substring(1).toLowerCase();

    modifiedNames.push(capitalizedInitial);
  }
  console.log(modifiedNames);
};

exercise5(["samuel", "MARIA", "luke", "mary"]);

// ------------------------------------------
// 6 exercise: No Duplicates
console.log("\nexercise 6: No Duplicates");

const exercise6 = collection => {
  let noDuplicates = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] !== collection[i + 1]) {
      let elem = collection[i];
      noDuplicates.push(elem);
    }
  }
  console.log(noDuplicates);
};
exercise6([1, 4, 4, 7, 7, 7]);
exercise6([1, 6, 6, 9, 9]);
exercise6([2, 2, 2, 2, 2, 2]);
exercise6([5, 10, 15, 20, 25]);

// 7 exercise: No Duplicates
console.log("\nexercise 7: Repeat it");

const exercise7 = (str, repeatNum) => {
  var repeatWords = [];
  for (let i = 0; i < repeatNum; i++) {
    repeatWords.push((repeatNum[i++] = str));
  }
  console.log(repeatWords);
};
exercise7("example", 3); //  ["example", "example", "example"]
