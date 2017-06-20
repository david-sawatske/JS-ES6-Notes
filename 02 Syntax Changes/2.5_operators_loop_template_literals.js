// Rest Operator (...) //
let nums = [1,2,3,4,5];

function sumUp(...toAdd) { // '...' is the rest operator. it will covert an
  let result = 0;          // unknown number of args to an array
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  return result;
}

console.log(sumUp(nums)); // => 15   without the rest operator included above

// what if we don't have the numbers we want to work with in an array?

console.log(sumUp(1, 2, 3, 4, 5)); // not an array, 5 arguments


// Spread Operator (...) //
let numbers = [1,2,3,4,5];
// we want to get the max of these values
console.log(Math.max(numbers)); // => NaN   .max expects a list of nums, not array
console.log(Math.max(...numbers)); // => 5  use the spread operator to split
                                   //       the array to individual values


// the 'for' loop - a shorter syntax for looping through arrays
let results = [1.23, 1.10, 4.1];
for (let result of results) {
  console.log(result);
}
// => 1.23
//    1.1
//    4.1


// Template Literals (``) - strings with extra features
//  - multiline strings (without escaping \ )
//  - using vars inside and additional JS too

let name = 'Max';
let desc1 = `
  We can include variable's value, like ${name + '!!!'}
`;
console.log(desc1); // => We can include variable's value, like Max!!!

let desc2 = `
  We can escape to print out \${name + '!!!'} too
`;
console.log(desc2); // => We can escape to print out ${name + '!!!'} too
