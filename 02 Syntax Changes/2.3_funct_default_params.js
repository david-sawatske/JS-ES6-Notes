// these apply to traditional and fat arrow functions

function isEqToHere(number, compare = 10) {  // setting default of 10 to compare
  return number == compare;
}
console.log(isEqToHere(10)); // => true

function isEqToHere(number = 10, compare) {  // setting default of 0 to number
  return number == compare;
}
console.log(isEqToHere(10)); // => false  as the default is assigned to number
                             //           even though it has a value


// you can also set arguments using the other arguments
function isEqToHere(number, compare = number) {
 return number == compare;
}
console.log(isEqToHere(10)); // => true

function isEqToHere(number, compare = number) {
 return number == compare;
}
console.log(isEqToHere(10, 15)); // false  the default of number is overwritten
                                 //        by the passed in value (15)

function isEqToHere(number = compare, compare = 10) {
return number == compare;
}
console.log(isEqToHere()); // => error   trying to use 'compare' before its set
