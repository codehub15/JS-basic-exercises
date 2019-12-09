console.log("\n#1 ---------------------------------------");
// 1
const name = "Natalia";
console.log(`Name length is ${name.length}`);
const secondElem = name[1];
const sixthElem = name[5];
console.log(`2nd element: ${secondElem}\n6th element: ${sixthElem}`);


console.log("\n#2 ---------------------------------------");
// 2
const js = "JavaScript";
console.log(`length of string is ${js.length} characters`);
const letterJ = js[0];
const letterS = js[4];
console.log(`${letterJ} & ${letterS}`);

console.log("\n#3 ---------------------------------------");
// 3
const sentence = "I can walk in the park all day!";
const goal = sentence.includes("park");
const park = (goal) ? "park" : "keep trying";
console.log(`${park}`);
//console.log(`${sentence.substring(18, 22)}`);


console.log("\n#4 ---------------------------------------");
// 4
const jsWord = "JavaScript";
console.log(`${jsWord.substring(3, 6)}`);


console.log("\n#5 ---------------------------------------");
// 5
const helloWorld = "Hello World";
console.log(`${helloWorld.toUpperCase()}`);


console.log("\n#6 ---------------------------------------");
// 6
const anotherWorld = "Hello Earthling";
console.log(`${anotherWorld.toLowerCase()}`);


console.log("\n#7 ---------------------------------------");
// 7
const shoes = "nice shoes";
console.log(`Does the string include a "l"? ${shoes.includes("l")}
Does the string include a "n"? ${shoes.includes("n")}`);


console.log("\n#8 ---------------------------------------");
// 8
const firstString = "JavaScript";
console.log(`${firstString[0]}${firstString}${firstString[0]}`);


console.log("\n#9 ---------------------------------------");
// 9
console.log(`${firstString.substring(7)}${firstString}${firstString.substring(7)}`);


console.log("\n#10 ---------------------------------------");
// 10
const computer = "ThinkPad";
console.log(`${computer.toUpperCase()}`);
console.log(`Does our string include the word Java? ${computer.includes("Java")}`);


console.log("\n#11 ---------------------------------------");
// 11
const myString = "JavaScript";
console.log(`${myString[myString.length - 1]}${myString.substring(1, myString.length - 1)}${myString[0]}`);

console.log("\n#12 ---------------------------------------");
// 12
const myName = "Jaime";
const myCity = "Berlin";
const myJob = "web developer";
console.log(`My name is ${myName}. I live in ${myCity} and I am a ${myJob}.`);


console.log("\n#13 ---------------------------------------");
// 13
const myVariable = "the quick brown fox";
console.log(`${myVariable[0].toUpperCase()}${myVariable.substring(1)}`);