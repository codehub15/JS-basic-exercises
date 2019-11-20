// Object.defineProperty()

// object property definition
const obj = {
  counter: 0
};

// getter definition

// reset
Object.defineProperty(obj, "reset", {
  get: function() {
    this.counter = 0;
  }
});

// increment
Object.defineProperty(obj, "increment", {
  get: function() {
    this.counter++;
  }
});

// decrement
Object.defineProperty(obj, "decrement", {
  get: function() {
    this.counter--;
  }
});

// setter definition

// add
Object.defineProperty(obj, "add", {
  set: function(value) {
    this.counter += value;
  }
});

// subtract
Object.defineProperty(obj, "subtract", {
  set: function(value) {
    this.counter -= value;
  }
});

// call and change value of object property 'counter'
console.log(obj.counter);

// increment
obj.increment;
console.log(obj.counter);

// add
obj.add = 5;
console.log(obj.counter);

// decrement
obj.decrement;
console.log(obj.counter);

// subtract
obj.subtract = 2;
console.log(obj.counter);
