// Well Known Symbols - shipped w- ES6 offering core funcitonality

// a couple examples - more on MDN

// [Symbol.toString] yields a unique ID which is a property class Person obj
class Person {

}

let person = new Person();
console.log(person); // => [object, Object] {...} does not show what type of object

// to overide default behavior
// => 'Symbol.toString' is not a fn, it is a ES6 built in symbol
class Person1 {

}

Person1.prototype[Symbol.toString] = 'Person'

let person1 = new Person1();
console.log(person1); // => [object, Person] {...}  with overwritten value

// Another ex of meta programming that may be useful during programming


// [Symbol.toPrimitive] yields a unique ID which is a property on array obj
//  => in this case is a function which handles an array when transformed
//     to a primitive value, like string

let numbers = [1, 2, 3];

console.log(numbers + 1); // => '1,2,31'  probably not desired output

numbers[Symbol.toPrimitive] = function() { // change the fn to do what you need
  return 999;                              // simply returns 999 here
}

console.log(numbers + 1); // => 1000     the returned 999 + 1 
