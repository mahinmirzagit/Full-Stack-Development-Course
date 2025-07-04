// ---------- OOP in JS (Object Oriented Programming) ----------
// OOP is a programming paradigm that uses objects and classes to design applications and programs. It is a way to organize and structure code to make it more maintainable, efficient, and scalable. In JavaScript, OOP is achieved through the use of classes, objects, inheritance, and polymorphism.

// Prototype - The prototype of an object is the object from which it is created. It is used to inherit properties and methods from another object. In JavaScript, the prototype of an object is accessed using the `__proto__` property or the `Object.getPrototypeOf()` method.

let obj = {
  a: 1,
  b: 2,
};
console.log(obj.__proto__); // Output: Object {} OR
console.log(Object.getPrototypeOf(obj)); // Output: Object {}

// Setting the prototype of an object - The prototype of an object can be set using the `Object.setPrototypeOf()` method. This method sets the prototype of an object to the specified value. If the value is not an object, it throws a TypeError.

let animal = {
  eats: true,
};
let dog = {
  jumps: true,
};

dog.__proto__ = animal; // OR
let a = Object.setPrototypeOf(dog, animal);

console.log(dog.eats, a);

// ---------- Class ----------
// Classes in JavaScript are a way to define blueprints for creating objects. They are used to encapsulate data and behavior, and to provide a way to create objects that have a specific structure and behavior.

class Animal {
  constructor(name) {
    this.name = name;
  }
  eats() {
    return true;
  }
  runs() {
    return true;
  }
}

class Lion extends Animal {
  // Inheritance
  constructor(name) {
    super(name); // Calls the constructor of the parent class with the name parameter
    this.sound = "Roar";
  }
  attacks() {
    return true;
  }
  // method overriding
  eats() {
    super.eats(); // Calls the eats method of the parent class
    return false;
  }
  // static method - a method that belongs to the class itself, not to instances of the class
  static staticMethod() {
    return "This is a static method";
  }
}

let catty = new Animal("Cat");
catty.name = "Laika";
console.log(catty.name, catty.eats(), catty.runs());

let l = new Lion("Lion");
console.log(l.runs(), l.sound, l.attacks(), l.name);
console.log(catty.eats(), l.eats()); // Output: true false
// console.log(l.staticMethod()); gives error
console.log(Lion.staticMethod()); // Output: This is a static method

// getters and setters
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
}
let p = new Person("John", 30);
console.log(p.name); // getting the value of the property
p.name = "Zayn"; // setting the value of the property
console.log(p.name); // getting the new value of the property

// instanceof operator
let a2 = new Animal("Animal");
console.log(a2 instanceof Animal); // Output: true