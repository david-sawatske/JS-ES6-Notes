// There are two important Rules, which you need to understand if you're working
// with ES6 Modules:
//
// Modules are always in Strict Mode (no need to define "use strict")
// Modules don't have a shared, global Scope. Instead each Module has its own Scope

// external.js
var keyValue = 1000;

function test() {
  keyValue = 2000;        // also changing the val for keyValue
  console.log('tested!');
}

let ab = 'some text'

export {keyValue, test}
export default ab; // this sets the default for which this file exports
                   // => can only have one

// index.js
import {keyValue as key, test} from './external' // setting alias as 'key'
import ab from './external' // no need for curly braces for default

console.log(key); // => 1000
test(); // => 'tested!'
console.log(key); // => 2000
// shows that importing 'keyValue' does not import the value (1000), rather a
// reference to the variable in the other file


// //
// index.js
import * as allExports from './external' // importing all of the exports with '*'
// packed as JS object with alias we chose

// accessing exports through alias
console.log(allExports.keyValue); // => 1000
allExports.test(); // => 'tested!'
console.log(allExports.keyValue); // => 2000
