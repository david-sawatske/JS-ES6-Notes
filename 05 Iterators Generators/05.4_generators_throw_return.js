// .throw and .return and methods available in addition to .next

function *gen2(end) {
  for (let i = 0; i < end; i++) {
    try {               // the loop would end without the try/ catch block
      yield i;          // and would not display the arg given to .throw()
    } catch (e) {
      console.log(e);   // if we catch an error it is printed to the console
    }                   // and the loop continues
  }
}
let it2 = gen2(2);

console.log(it2.next());            // => { value: 0, done: false }
console.log(it2.throw('an error')); //    'an error'
                                    //    { value: 1, done: false }
console.log(it2.next());            //    { value: undefined, done: true }



// .return - will return the overwritten value which is passed as an argument 
function *gen3(end) {
  for (let i = 0; i < end; i++) {
    try {
      yield i;
    } catch (e) {
      console.log(e);
    }
  }
}
let it3 = gen3(2);

console.log(it3.next());             // => { value: 0, done: false }
console.log(it3.return('an error')); //    { value: 'an error', done: true }
console.log(it3.next());             //    { value: undefined, done: true }
