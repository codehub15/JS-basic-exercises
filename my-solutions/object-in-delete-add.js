const computer = {
  name: "acer",
  model: "Swift 5",
  cpu: "Intel Core™ i5",
  ssd: 256,
  ram: 8,
  weighs: 990,
  touchscreen: true
};

// check if the specified property is in the specified object with in operator
console.log("\nin operator");
console.log("model" in computer);

// delete a property
console.log(`\ndelete this: ${computer.model}`);
delete computer.model;

// add a new property with value if it is no one
console.log("\nadd");

if ("model" in computer === false) {
  computer.model = "Swift 5";
}

console.log(computer.model);
