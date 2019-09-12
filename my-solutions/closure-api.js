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

  let create = elem => {
    db.push(elem);
    return db.length;
  };

  let read = () => {
    let dbCopy = [...db];
    console.log("db copy", dbCopy);
    return dbCopy;
  };
  read();

  api.push(create);
  return api;
};

let createInDb = init();

console.log(createInDb[0]("first"));
console.log(createInDb[0](2));
console.log(createInDb[0]("sun"));
