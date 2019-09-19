// nested for loop

// 1
console.log(`\n# 1`);
/* 
the goal:
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

// 2
console.log(`\n# 2`);
/*
the goal:
-|-|-
|-|-|
-|-|-
*/
let result = "";

for (let i = 0; i < 3; i += 1) {
  result = "";
  for (let j = 0; j < 5; j += 1) {
    // all even
    if (j % 2 === 0 && i % 2 === 0) {
      result += "-";
    }
    // j is even & i is odd
    else if (j % 2 === 0 && i % 2 !== 0) {
      result += "|";
    }
    // j is odd & i is even
    else if (j % 2 !== 0 && i % 2 === 0) {
      result += "|";
    }
    // all odd
    else if (j % 2 !== 0 && i % 2 !== 0) {
      result += "-";
    }
  }
  console.log(result);
}

// 3
console.log(`\n# 3`);
/*
the goal:
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

    // console.log(`j ${j} * ${asterisks} `);
  }
  console.log(asterisks);
}

//
console.log(`\n# 4`);
/*
the goal:
****
***
**
*
*/
let asterisksReversed = "";
for (let i = 0; i < 4; i += 1) {
  asterisksReversed = "";
  for (let j = 4; j >= i; j -= 1) {
    asterisksReversed += "*";
  }
  console.log(asterisksReversed);
}
