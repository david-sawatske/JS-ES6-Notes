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
