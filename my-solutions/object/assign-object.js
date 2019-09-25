/* 
Object.assign() is one method which is used
- to copy the values and properties from one or more source objects to a target object (return a target object)
- for cloning an object
- to merge object with same properties (if they have a same key, properties in a target object will be overwritten overwrite )
*/

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
