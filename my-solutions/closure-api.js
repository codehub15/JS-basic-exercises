// closure exercise with CRUD operations
// Return a function reference
let init = () => {
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
