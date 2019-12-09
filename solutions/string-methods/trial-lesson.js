// 1
let name = "Anna";
console.log(name);

// 2
console.log("Schm" + name);

// 3
// name has value Anna because it has not been reassigned

// 4
name = "Sophia";
console.log(name);
// variable name was reassigned and has now another value

// 5
let coffee = 3;

// 6
console.log(`${name} regularly drinks ${coffee} cups of coffee`);

// 7
let daysBeforeExam = 5;

// 8
console.log(
  `${name} drinks ${coffee} cups of coffee, with ${daysBeforeExam} days before exam`
);

// 9
coffee += 1; // coffee++;
daysBeforeExam -= 1; // daysBeforeExam--;
console.log(
  `one more ${coffee} cups of coffee, with ${daysBeforeExam} less days before exam`
);

// 10
// currently value of coffee is 3 and of daysBeforeExam 2

// 11
// Anna, SchmAnna, Sophia,
// Sophia regularly drinks 3 cups of coffee,
// Sophia drinks 3 cups of coffee, with 5 days before exam,
// 4 cups of coffee and 4 days before exam

// 12
let schmozzler = "Schm";

// 13
console.log(schmozzler.concat(name)); // SchmSophia

// schmozzler as a function
function schmozzlerFunc(name) {
  let str = "Schm";
  let nameToLower = name.toLowerCase();
  console.log(str.concat(nameToLower));
}

schmozzlerFunc("David");
