// Symbols - new primitive type with unique identifier
//  => created without 'new' keyword
//  => may pass one argument for debugging reasons (IDs the symbol)
//  => allow overwriting of well know symbols to overide default behavior
//     on built in objects

let symbol = Symbol('debug');

let obj = {
  name: 'Max',
  [symbol]: 22
}

console.log(obj); // => { name: 'Max' }  symbol is not printed out. same for
                  //                     'for in' loop

console.log(obj[symbol]); // => 22   it is there, but 'hidden'

// useful for storing meta information about obj and access only if needed


// Shared Symbols - have two symbols share the same ID
//  => useful when you need access to the ID in different places in you app
let symbol1 = Symbol.for('age'); // 'age' is not debugging string, rather the
let symbol2 = Symbol.for('age'); // key with which shared ID symbols are created

console.log(symbol1 == symbol2); // => true

let person = {
  name: 'max',
  age: 30
};

function makeAge(person) {
  let ageSymbol = Symbol.for('age'); // we do not have access to ageSymbol outside
  person[ageSymbol] = 27;            // fn, but symbol1 and symbol2 point to the
};                                   // same key and are available globally

makeAge(person);
console.log(person[symbol1]); // => 27   age is accessable because symbol1 shares
                              //         a key with ageSymbol which assigned age
                              //         to 27 within the makeAge funciton

console.log(person['age']);   // => 30   'age' within the object is not overwritten
                              //         as the 'age' sybol has a unique ID that
                              //         is unrelated to person's 'age' property
