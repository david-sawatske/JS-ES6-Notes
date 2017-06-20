// More concise code
var fn1 = () => console.log('hi');  // () is empty arguments; no {} for function
fn1(); // => 'hi'                      body is needed

// Implicit Returns
var fn2 = () => 'hi';
console.log(fn2()); // => 'hi'

// code longer than one line? add {}
// - note the added arguments
var fn3 = (a, b, c) => {
  return a + b + c;
};
console.log(fn3(1,2,3)); // => 6

// only one argument, no need for ()
var fn4 = a => a + 5;
console.log(fn4(2, 100)); // => 7    note the 100 is ignored


// Arrow Functions and 'this'
// setup
var button = document.querySelector('button'); // selects button from HTML

// 'old fashioned way' of defining a function
function fn5() {
  console.log(this);
}

// fat arrow
var fn6 = () => console.log(this);

// examining values for 'this' shows the key difference between the two
var button = document.eventListener('click', fn5);
// => { HTMLButtonElement }   refers to what called the f5 function
var button = document.eventListener('click', fn6);
// => { Window }   this is the context in which the fn6 arrow function was defined
//  - the fat arrow function keeps it's context, 'this' does not change
