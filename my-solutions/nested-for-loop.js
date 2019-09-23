// nested for loop

// 1 goal
console.log(`\n# 1\n`);
/* 
|||||
|||||
|||||
|||||
*/
let pipes = "";
for (let i = 0; i < 4; i += 1) {
  pipes = "";
  for (let j = 0; j < 5; j += 1) {
    pipes += "|";
  }
  console.log(pipes);
}

// 2 goal
console.log(`\n# 2\n`);
/*
-|-|-
|-|-|
-|-|-
*/
let muster = "";

for (let i = 0; i < 3; i += 1) {
  muster = "";
  for (let j = 0; j < 5; j += 1) {
    // all even or all odd
    if ((j % 2 === 0 && i % 2 === 0) || (j % 2 !== 0 && i % 2 !== 0)) {
      muster += "-";
    }
    // j is even & i is odd or j is odd & i is even
    else if ((j % 2 === 0 && i % 2 !== 0) || (j % 2 !== 0 && i % 2 === 0)) {
      muster += "|";
    }
  }
  console.log(muster);
}

// 3 goal
console.log(`\n# 3\n`);
/*

*
**
***
****

*/
let asterisks = "";
for (let i = 0; i < 4; i += 1) {
  asterisks = "";
  for (let j = 0; j <= i; j += 1) {
    asterisks += "*";
  }
  console.log(asterisks);
}

// 4 goal
console.log(`\n# 4\n`);
/*

****
***
**
*

*/
let asterisksReversed = "";
for (let i = 0; i < 4; i += 1) {
  asterisksReversed = "";
  for (let j = 3; j >= i; j -= 1) {
    asterisksReversed += "*";
  }
  console.log(asterisksReversed);
}

// 5 goal
console.log("\n5\n");

//    *
//   * *
//  * * *
//  * * * *
// * * * * *

let starTree = "";
let n = 5;
for (let i = 1; i <= n; i++) {
  starTree = "";
  for (let j = 1; j <= 2 * n - 1; j++) {
    j >= n + 1 - i && j <= n - 1 + i ? (starTree += "*") : (starTree += " ");
  }
  console.log(starTree);
}

// another way
console.log();

let starTree2 = "";
for (let i = 0; i < 5; i++) {
  starTree2 = "";
  for (let j = 0; j < 5 - i; j++) {
    starTree2 += " ";
  }
  for (let k = 0; k <= i; k++) {
    starTree2 += "* ";
  }
  console.log(starTree2);
}

console.log();

// another way with a function
const pyramid = n => {
  const mid = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; ++row) {
    //for each row, make empty steps
    let level = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      if (mid - row <= col && mid + row >= col) {
        level += "*";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
};
pyramid(8);
