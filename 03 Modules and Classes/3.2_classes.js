// Classes - blueprint to create objects
//  => provides flexibility when setting up functions

class Person {
  constructor(name) { // 'const..'' reserved funt name to give props on initialization
    this.name = name;
  }

  greet() {    // creating a funciton inside class  (no 'func..' keyword)
    console.log(`Hello, I'm ${this.name}`); // accessing prop with 'this.'
  }
}

let person = new Person('Max'); // creates a new object, passing in name
person.greet(); // => 'Hello, I'm Max'

console.log(person.__proto__ == Person.prototype); // => true
// the prototype of the object created by a class is the classes prototype

// Inheritance //
// provides specificity with and give use of features, props and methods of parent

// create a new class that extend Person
class Man extends Person {

}

let  max = new Man('Max');
max.greet(); // => 'Hello, I'm Max'

// inheritance - parent contstructor and 'super'
// if you want to use a constructor in a class that extends from another, you
// must call the constructor in the parent class
class Man2 extends Person {
  super('Max2'); // calls parent constructor with arg 'Max2'
  constructor(age) {
    this.age = age;
  }

  greet() {
    console.log('Hi from inside Max2');
  }

  greetTwice() {
    this.greet();    // what is the output here?
    super.greet();   // here?
  }
}

let  max = new Man2(27);
max.greet(); // => Hello, I'm Max2. I'm 27
// takes the default name passed to the parent constructor function and the
// passed in value for age
//  ** `Hello, I'm ${this.name}. I'm 27` was added to parent greet function

max.greetTwice(); // => 'Hi from inside Max2'       'this' refs Man2
                  // => 'Hello, I'm Max2. I'm 27'   'this' refs Person (parent)

console.log(max.__proto__ == Max.prototype); // => true


// Static Methods //
// helper classes contain methods, but do not instantiate new objects
class Helper {
  static logTwice(message) { // allows the method to be called without
    console.log(message);    // creating an instance of the class first
    console.log(message);
  }
}

Helper.logTwice('logged!') // without 'static', this would throw error
