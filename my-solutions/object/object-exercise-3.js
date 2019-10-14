/* 
Easy one
1-Creating objects using the ‘new’ keyword
2-Creating objects using literal notation
3-Creating objects using the object constructor
4-Adding properties to each object type
5-Adding methods to each object type
*/
console.log("1 exercise  ---------------------------");

// Creating objects using the ‘new’ keyword
const person1 = new Object();
// Adding properties and methods
person1.name = "John";
person1.age = 35;
person1.greeting = function() {
  return `Hello, I'm ${person1.name} from first object.`;
};
// calling object
console.log(person1);
console.log(person1.greeting());

console.log("---------------------------");

// Creating objects using literal notation
const person2 = {
  // adding properties and methods inside
  name: "John",
  age: 35,
  greeting: () => {
    return `Hi, I'm ${person2.name} from second object.`;
  }
};
// Adding properties outside
person2.hobby = "Sport";
// calling object
console.log(person2);
console.log(person2.greeting());

console.log("---------------------------");

// Creating objects using the object constructor
function Person3(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.greeting = function() {
    return `Hello, I'm ${this.name} from constructor object.`;
  };
}
// Assigning properties to the objects
const john = new Person3("John", "Doe", 38, "blue");
// calling object
console.log(john);
console.log(john.greeting());

console.log("\n2 exercise  ---------------------------\n");
/*
----------------------------------------------------------------------
Second one
change this code to make it working :blush:
const person;
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.employed);
1-change what needed to ADD other more people to your array of objects, you need at lest 5 people
2-Find how many people has a job
3-display only the people are over 30 and has no job
*/

function Person(firstName, lastName, age, employed) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.employed = employed;
  this.greeting = function() {
    return `Hi, I'm ${this.firstName}`;
  };
}

const kristina = new Person("Kristina", "Del", 35, true);
const alex = new Person("Alex", "Schmidt", 38, true);
const jan = new Person("Jan", "Dore", 25, false);
const anna = new Person("Anna", "Lind", 30, true);
const markus = new Person("Markus", "Maxim", 45, false);

let personArr = [kristina, alex, jan, anna, markus];

/*
console.log(jan.firstName);
console.log(jan.lastName);
console.log(jan.age);
console.log(jan.employed);
*/

for (let i = 0; i < personArr.length; i++) {
  let person = personArr[i];
  if (person.employed === false && person.age > 30) {
    console.log(`${personArr[i]["firstName"]} is employed.`);
  }
}

console.log("-------------------");
// all people from object
for (let i = 0; i < personArr.length; i++) {
  let person = personArr[i];
  console.log(
    `All people: ${person.firstName} ${person.lastName} is ${person.age} years old and is employed ${person.employed}`
  );
}

// adding method outside object (constructor)
anna.greeting = function() {
  return `Hi, I'm ${this.firstName}.`;
};
console.log(anna.greeting());

console.log(markus.greeting());
