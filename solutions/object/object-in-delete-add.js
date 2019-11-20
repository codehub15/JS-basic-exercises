// example with 'in operator', 'delete' and add a value

const notebook = {
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
console.log(`Is a property in object? ${"model" in notebook}`);

// delete a property from object
console.log(`\ndelete this: ${notebook.model}`);
delete notebook.model;

console.log("\nadd");
// add a property if this property is not in object
if ("model" in notebook === false) {
  notebook.model = "Swift 5";
}
// print added property
console.log(notebook.model);
