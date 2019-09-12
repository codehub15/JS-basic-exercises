// closure exercise with CRUD operations

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
      return (
        create(elem) +
        ` New element added! The new length of the array is ${db.length}.`
      );
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
console.log(createInDb[2](20, "7"));
console.log(createInDb[2](15, "sunshine"));
console.log(createInDb[1]()); // access to read
