// if vals are not assigned when creating object, JS will look for those vals
// in the surrounding variables
let name = 'Anna';
let age = 25;

let obj1 = {
  name,
  age
};

console.log(obj1); // => { name: 'Anna', age: 25 }

// you can also access age that is in a funct within the object
let obj2 = {
  name: 'Max',
  age,
  greet() {
    console.log(`${this.name}: ${this.age}`); // JS will find age var above
  }
};

obj2.greet(); // => Max: 25

// Dynamic Field - [ageField] on 28 looks for ageField var and use val as prop name
let ageField = "age";

let obj3 = {
  name: 'Max',
  [ageField]: 28, // looks for ageField var and uses its val. must give it value,
  "greet me"() {  // as "age" given from ageField !== age var listed above
    console.log(`${this.name}: ${this.age}`); // '.age' taken from val of ageField
  }                                           // can still use the dot notation
};

obj3["greet me"](); // => Max: 28   calling a fn named with string using []
console.log(obj3[ageField]); // => 28  you can access the val with the varible
                             //        that holds the property name, as well
