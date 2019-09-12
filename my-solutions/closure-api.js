// closure exercise with CRUD operations
// Return a function reference
/* let init = () => {
  let db = [];
  let create = elem => {
    db.push(elem);
    return db.length;
  };
  return create;
};

let createInDb = init();
console.log(createInDb("first"));
console.log(createInDb(2));
console.log(createInDb("sun"));
 */

// Expose more function references (provide an API)
// Part one: refactor init
let init = () => {
  let db = [];
  let api = [];

  const create = elem => {
    db.push(elem);
    return db.length;
  };

  const read = () => {
    let dbCopy = [...db];
    return dbCopy;
    // return db.push(dbCopy); // so you can push value from read
  };

  const update = (index, elem) => {
    if (db[index]) {
      return (db[index] = elem);
    } else {
      //   return "Error, there is no existing element at the given index!";
      //   return db.push(elem);
      return create(elem);
    }
  };

  api.push(create, read, update);
  return api;
};

let createInDb = init();

console.log(createInDb[0]("first"));
console.log(createInDb[0](2));
console.log(createInDb[0]("sun"));
console.log(createInDb[1]("new")); // from the outside(api) you can not add new element
console.log(createInDb[0]("other one"));
console.log(createInDb[1]()); // access to read
console.log(createInDb[2](0, "new elem"));
console.log(createInDb[2](10, 100));
console.log(createInDb[2](6, "100"));
console.log(createInDb[1]()); // access to read
