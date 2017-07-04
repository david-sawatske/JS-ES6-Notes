// create a person and make it iterable to loop through their hobbies

let person = {
  name: "Max",
  hobbies: ['sports', 'cooking'],
  [Symbol.iterator]: function() {
    let i = 0;
    let hobbies = this.hobbies;
    return {
      next: function() {
        let value = hobbies[i];
        i++;
        return {
          done: i > hobbies.length ? true : false,
          value: value
        };
      }
    };
  }
};

for (let hobby of person) {
  console.log(hobby);
}
// => sports
//    cooking
