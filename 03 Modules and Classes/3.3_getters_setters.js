class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name; // the '_' denotes private property not accessable
  }                    // outside obj without the 'get name' getter function
                       //   => concept called encapsulation
                       // data can be changed before it is made available by the getter
                       //  i.e. return this._name.toUpperCase();

  set name(value) {
    if (value.length > 2) { // setter method can be written with conditionals
      this._name = value;
    }
  }
}


// Sub Classing - extend built-in objects to add own functionality
class ConvertableArray extends Array {
  convert() {
    let returnArray = [];
    this.forEach(value => returnArray.push('Converted!' + value));
    return returnArray;
  }
}

let nums = new ConvertableArray();
nums.push(1);
nums.push(2);
nums.push(3);
console.log(nums.convert()); // => ['Converted!1', 'Converted!2', 'Converted!3']
