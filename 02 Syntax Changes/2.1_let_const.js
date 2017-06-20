// let and const //

// block scoping
// - why not just change 'var'? because it needs to remain backwards compatable
if (true) {
  let name = 'Max';
}
console.log(name); // => error   name is defined in the block scope, not window


// const can not be reassigned
const AGE = 27;
AGE = 29; // => error

// arrays and objects are reference types. the const AGES does not hold the values,
// it holds a pointer to a space in memory.
const AGES = [28, 29, 33];
AGES.push(35);

console.log(AGES); // => [ 28, 29, 33, 35 ]
// we did not change AGES pointer, we changed the value to which it points

// again, the pointer has not changed, only the value
const OBJ = {
  age: 27
};
console.log(OBJ); // => { age: 27 }

OBJ.age = 30;
console.log(OBJ); // => { age: 30 }


// Hoisting
// ex with var
age = 27;
console.log(age); // => 27  the parser first goes through and sets vars to undefined
var age;          //        then assigns the desired values

// no hoisting with let or const
age = 27;
console.log(age); // => error
let age;

// must declare beforehand
let age;
age = 27;
console.log(age); // => 27

// here the variable IS defined before calling the funct, even though the funct
// was defined above
function doThis() {
  age = 27;
}
let age;
doThis();
console.log(age); // => 27
