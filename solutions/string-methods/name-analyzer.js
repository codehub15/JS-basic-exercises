const name = "Winston";
const trimName = name.trim();

console.log(`\nHello ${trimName}.\nYour name is ${trimName.length} letters long.
The first letter of your name is ${trimName[0]}, the last is ${trimName[trimName.length - 1]}.
If I wanted to be funny, I would call you ${trimName}chmoo.`);

console.log("\n------Bonus---------------------");

let name2 = " Winston Churchill ";
const trimName2 = name2.trim();
const splitSpace = trimName2.split(" ").join("");

console.log(`Hello ${trimName2}.\nYour name is ${splitSpace.length} letters long.
The first letter of your name is ${trimName2[0]}, the last is ${trimName2[trimName2.length - 1]}.
If I wanted to be funny, I would call you ${trimName}chmoo.`);
