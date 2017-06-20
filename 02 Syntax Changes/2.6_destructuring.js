// Destructuring - quick way to get certain values
// - objects = pull out elements by propery names
// - arrays  = pull out elements by index
//   * does not change originals

// Destructuring Arrays //

let numbers = [1,2,3];

// create a new array with vals 1 and 2
// 'a, b' are the variable names we want fill with vals
// numbers is the array we want to destructure
let [a, b] = numbers;

console.log(a); // => 1
console.log(b); // => 2
console.log(numbers); // => [ 1, 2, 3 ]   we not affecting original array

// ex with the rest parameter (...)
let [c, ...d] = numbers;
console.log(d); // => [ 2, 3 ]    puts remaining vals after 'a' into an array


// swapping values
let e = 5;
let f = 10;

[f, e] = [e, f]; // swaps vals for a and b
console.log(e); // => 10
console.log(f); // => 5

// leave out values - destructures the array without setting it to a variable
let [g, , i] = [1, 2, 3]
console.log(g, i);
// => 1
//    3


// Destructuring Objects //
let obj = {
  name: 'Max',
  age: 27,
  greet: function() {
    console.log("hello");
  }
};

let {name, greet} = obj;  // properties are identified by KEYWORD, not order
greet(); // => 'hello'   we do not need to account for age with ', ,'

// the 'name' and 'greet' on line 43 must match keywords in object
// what if we want an alias for those properties?
let {greet: hello} = obj; // setting an alais for function 'greet'
hello(); // => 'hello'
greet(); // => error    must stick with hello()
