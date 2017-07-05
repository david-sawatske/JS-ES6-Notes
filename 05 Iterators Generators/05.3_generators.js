// Generator - Function that does not necessarily run to the end when executed
// => running a Generator gives an Iterator, over which you can loop
// => allows us to create the logic contained in a fn to yield different values
//    - we can then use an Iterator to loop through the vals given by the Generator
// => the 'yield' keyword makes it easier for us to manage state
// => allows for asynchronous tasks by yielding results step by step

function *select() {
  yield 'house';
  yield 'garage';
}

let it = select(); // setting variable to function call

console.log(it.next()); // => { value: 'house', done: false }
console.log(it.next()); // => { value: 'garage', done: false }
console.log(it.next()); // => { value: undefined, done: true }


// Using Generator to loop through on object
let obj = {
  [Symbol.iterator]: gen  // assign Iterator created by Generator below
}

function *gen() { // this Generator will return an Iterator
  yield 1;
  yield 2;
}

for (let el of obj) {
  console.log(el);
}
// => 1
//    2

// Generators also accept arguments - allows for more dynamic Generators and
//                                    the Iterators they return
// => ie how and when the generator should yield values

function *gen2(end) {
  for (let i = 0; i < end; i++) {  // only yields values while i < end
    yield i;
  }
}
let it2 = gen2(2);

console.log(it2.next()); // => { value: 0, done: false }
console.log(it2.next()); // => { value: 1, done: false }
console.log(it2.next()); // => { value: 2, done: true }
