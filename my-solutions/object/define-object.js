// define object property
const obj = {
  counter: 0
};

// define getter

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

// define setter

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

// call
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
