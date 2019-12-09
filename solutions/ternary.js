// ( ) ? "true" : "false";

console.log("-------------------------------------");
// 1
const legalAge = 18;
const agePerson1 = 25;
const canDrive = (agePerson1 >= legalAge) ? "Yes, you can drive! Hope you have a license" : "Nope, you're too young!";
console.log(`${canDrive}`);


console.log("-------------------------------------");
// 2
const speedLimit = 130;
const speedCurrent = 90;
const speedCheck = (speedCurrent > speedLimit) ? "You're going too fast - slow down!" : "You're driving below the speed limit";
console.log(`${speedCheck}`);


console.log("-------------------------------------");
// 3
const legalAge2 = 21;
const personAge = 20;
const checkAge = (personAge < legalAge2) ? "Here's some juice" : "Here's some wine";
console.log(`${checkAge}`);


console.log("-------------------------------------");
// 4
const student = true;
const isStudent = (student) ? "Ticket costs €5,00" : "Ticket costs €12,00";
console.log(`${isStudent}`);

// another solution
const anotherStudent = "yes";
const isStudent2 = (anotherStudent === "yes") ? "Ticket costs €5,00" : "Ticket costs €12,00";
console.log(`another student ${isStudent2}`);


console.log("-------------------------------------");
// 5
const morning = 12;
const evening = 13;
const timeOfDay = (morning < evening) ? "Good Morning" : "Good Evening";
console.log(`${timeOfDay}`);

// another solution
const morning2 = false;
const timeOfDay2 = (morning2) ? "Good Morning" : "Good Evening";
console.log(`another solution: ${timeOfDay2}`);
