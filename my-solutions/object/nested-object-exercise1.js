// exercise 1
/*
1-Using a for loop, console.log all of the numbers in the primeNumbers array.
2-Using a for loop, console.log all of the even Fibonacci numbers.
3-Console.log the value “second” inside the order array.
4-Inside of the addSnack function there is a special keyword called this. 
What does the word this refer to inside the addSnack function?
*/
// Given the following nested object:
var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonacci: [1, 1, 2, 3, 5, 8, 13]
    },
    addSnack: function(snack) {
      this.snacks.push(snack);
      // return this;
    }
  }
};

// prime numbers
console.log("prime numbers");
// console.log(nestedData.innerData.numberData.primeNumbers);

for (
  let i = 0;
  i < nestedData.innerData.numberData.primeNumbers.length;
  i += 1
) {
  console.log(nestedData["innerData"]["numberData"]["primeNumbers"][i]);
}

// fibonacci
console.log("\nfibonacci");

for (let i = 0; i < nestedData.innerData.numberData.fibonacci.length; i += 1) {
  let fibonacciNum = nestedData.innerData.numberData.fibonacci[i];
  if (fibonacciNum % 2 === 0) {
    // console.log(nestedData["innerData"]["numberData"]["fibonacci"][i]);  // 1 way
    console.log(nestedData.innerData.numberData.fibonacci[i]); // 2 way
  }
}

// print value "second"
console.log("\nvalue “second”");
console.log(nestedData.innerData.order[1]);

// function with keyword this
// this means the current scope were I'm in.
console.log("\nfunction with this");
console.log((nestedData.addSnack = "nuts"));
console.log(nestedData.innerData.snacks);
