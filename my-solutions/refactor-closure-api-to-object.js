// refactor closure db api to object

let newObject = new Object();
newObject.db = [];
newObject.api = [];

newObject.create = elem => {
  newObject.db.push(elem);
  console.log(`New Element is added`);
  return newObject.db.length;
};

newObject.read = () => {
  return [...newObject.db];
};

newObject.update = (index, elem) => {
  if (newObject.db[index]) {
    return (newObject.db[index] = elem);
  } else {
    return newObject.create(elem);
  }
};

newObject.remove = index => {
  if (newObject.db[index]) {
    return newObject.db.splice(index, 1);
  } else {
    return "Error, there is no existing element at the given index!";
  }
};

newObject.api.push(
  newObject.create,
  newObject.read,
  newObject.update,
  newObject.remove
);

// create
console.log(newObject.create("one"));
console.log(newObject.create("other one"));
console.log(newObject.create("one more"));

console.log("\nread after create");

// read
console.log(newObject.read());

console.log();

// update
console.log(newObject.update(1, "updated"));

console.log(`read after update`);
console.log(newObject.read());

console.log("\ndelete on an existing index and on an unexisting index");

// delete
console.log(newObject.remove(2));
console.log(newObject.remove(5));

console.log(`\nread after delete`);
console.log(newObject.read());
