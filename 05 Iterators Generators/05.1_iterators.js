// Iterator - objects that know how to access values in a collection, on at a time
//  => has built in symbol which tells JS that this obj is iterable
//     - [Symbol.iterator]

// Built in Iterator function
let array = [1,2,3];

console.log(typeof array[Symbol.iterator]); // => function
// the value of the '.iterator' symbol is a function

// assign that funciton to a variable and execute it
let it = array[Symbol.iterator]();

console.log(it); // => {}  this array iterator obj only has the 'next' method

console.log(it.next()); // => { value: 1, done: false }
console.log(it.next()); // => { value: 2, done: false }
console.log(it.next()); // => { value: 3, done: false } fn does not know 3 is last
console.log(it.next()); // => { value: undefined, done: true }


// Overriding default Iterator
array[Symbol.iterator] = function() {
  return {               // we know that this iterator fn returns an object
    next: function() {   // and that it has a next fucntion
      return {           // next fn returns an obj with done and value properties
        done: false,
        value: 10
      };
    }
  };
}

let it2 = array[Symbol.iterator]();
console.log(it2.next()); // => { done: false, value: 10 }
console.log(it2.next()); // => { done: false, value: 10 }  the values don't change

// Another override
array[Symbol.iterator] = function() {
  let nextValue = 10;
  return {
    next: function() {
      nextValue++;
      return {
        done: nextValue > 13 ? true : false,
        value: nextValue
      };
    }
  };
}
// like above
let it3 = array[Symbol.iterator]();
console.log(it3.next()); // => { done: false, value: 11 }
console.log(it3.next()); // => { done: false, value: 12 }
console.log(it3.next()); // => { done: false, value: 13 }
console.log(it3.next()); // => { done: true, value: 14 }

// another illustration - loops until value is > 13
for (let element of array) {
  console.log(element);
}
// => 11
//    12
//    13

// You can make make any object Iteratible by implementing [Symbol.iterator]
