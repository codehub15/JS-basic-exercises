// closure exercise with CRUD operations

let init = () => {
  let db = [];
  let api = [];

  // create
  const create = elem => {
    db.push(elem);
    return `New element added! The new length of the array is ${db.length}`;
  };

  // read
  const read = () => {
    let dbCopy = [...db];
    return dbCopy;
  };

  // update
  const update = (index, elem) => {
    if (db[index]) {
      return (db[index] = elem);
    } else {
      // return "Error, there is no existing element at the given index!";
      return create(elem);
    }
  };

  // delete
  const remove = index => {
    if (db[index]) {
      return db.splice(index, 1);
    } else {
      return "Error, there is no existing element at the given index!";
    }
  };

  api.push(create, read, update, remove);
  return api;
};

let createInDb = init();
/* 
// more readable

let apiDb = init();

let createDb = apiDb[0];
console.log(createDb("other one"));

let readDb = apiDb[1];
console.log(readDb());

let updateDb = apiDb[2];

let deleteDb = apiDb[3]; 
*/

// add new element to array
console.log("\n-----add new element to array-----------------------");
console.log(createInDb[0]("first"));
console.log(createInDb[0](2));
console.log(createInDb[0]("other one"));

// read data from array
console.log("\n-----print / read array after add-------------------");
console.log(createInDb[1]());

console.log("\n-----update array-----------------------------------");
console.log(createInDb[2](0, "new elem"));
console.log(createInDb[2](20, "7"));

// read data after update
console.log("\n-----print array after update------------------------");
console.log(createInDb[1]());

// delete element from array
console.log("\n-----delete element----------------------------------\n");
console.log("delete element on no existing index");
console.log(createInDb[3](-1));
console.log("\ndelete element on existing index");
console.log(createInDb[3](2));

// read data after delete element
console.log("\n-----print array after delete------------------------");
console.log(createInDb[1]());

// hacking attempt
console.log("\nhacking");
console.log(
  (createInDb[1]()[0] = `
       ////
     ^     ~
    (@)   (@)
        |     
       (-)
`)
);

console.log("\nafter hacking");
console.log(createInDb[1]());
