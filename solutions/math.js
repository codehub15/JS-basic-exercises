console.log("\n# 1 -----------------------------");
//# 1 Lowest Number
const lowestNum = Math.min(5, 3, 1, 100, 50);
console.log(`lowest number: ${lowestNum}`);


console.log("\n# 2 -----------------------------");
//# 2 Highest Number
const highestNum = Math.max(5, 10, 50, 100, 3);
console.log(`highest number: ${highestNum}`);


console.log("\n# 3 -----------------------------");
//# 3 Rounding

// round up
const num1 = 3321.32321;
const numRoundUp1 = Math.ceil(num1);
const num2 = 326.76;
const numRoundUp2 = Math.ceil(num2);
const num3 = 76788.7;
const numRoundUp3 = Math.ceil(num3);
const num4 = -9.78;
const numRoundUp4 = Math.ceil(num4);
const num5 = 43.342;
const numRoundUp5 = Math.ceil(num5);

console.log(`
round up number 1: ${numRoundUp1}
round up number 2: ${numRoundUp2}
round up number 3: ${numRoundUp3}
round up number 3: ${numRoundUp4}
round up number 3: ${numRoundUp5}
`);

// round down
const numToRound1 = 3321.32321;
const numRoundDown1 = Math.ceil(numToRound1);
const numToRound2 = 326.76;
const numRoundDown2 = Math.ceil(numToRound2);
const numToRound3 = 76788.7;
const numRoundDown3 = Math.ceil(numToRound3);
const numToRound4 = -9.78;
const numRoundDown4 = Math.ceil(numToRound4);
const numToRound5 = 28.329;
const numRoundDown5 = Math.ceil(numToRound5);

console.log(`
round down number 1: ${numRoundDown1}
round down number 2: ${numRoundDown2}
round down number 3: ${numRoundDown3}
round down number 3: ${numRoundDown4}
round down number 3: ${numRoundDown5}
`);


console.log("\n# 4 -----------------------------");
//# 4 random integer from 1-6
let randomNum = Math.floor(Math.random() * 6 + 1);

console.log(`random number: ${randomNum}`);
