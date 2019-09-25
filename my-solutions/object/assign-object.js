// assign to object
// assign combine objects all properties and merge to one object
// the source will never change, only target will change

const target = {
  name: "John",
  age: 35,
  hobby: "javascript"
};

const source = {
  name: "Alex",
  city: "Berlin"
};

// call objects before assign
console.log("target", target);
console.log("source", source);

console.log("-----------------------");
// call assigned object
const returnedTarget = Object.assign(target, source);
console.log("assigned", returnedTarget);

console.log("-----------------------");

// call objects after assign
console.log("target", target);
console.log("source", source);
