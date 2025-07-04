// ---------- Object Litrals ----------
// Objects are collections of key-value pairs. They are useful for storing data that has a structure, like a person's name and age. They are mutable even with const keyword

// How to create
const obj1 = {
  key1: "value1",
  key2: "value2",
};
// or
const obj2 = Object.create({
  key1: "value1",
  key2: "value2",
});

console.log(obj1);
console.log(obj1["key1"]); // To access a value by its key
console.log(obj1.key2); // OR To access a value by its key

//NOTE : When you declare an object with const, you can still modify its properties. This is because the const keyword only applies to the binding of the variable, not to the object itself. Instead Object.freeze() makes the object's properties immutable. And Object.seal() prevents new properties from being added, but allows existing properties to be modified.

obj1["key3"] = "value3"; // Adding new key-value (if not exist)
obj1["key3"] = "new value3"; // Modifying existing key-value (if exist)
console.log(obj1);

// Methods
Object.keys(obj1); // Gives an array of all keys
Object.values(obj1); // Gives an array of all values
Object.entries(obj1); // Gives an nested array of all key-value pairs
Object.assign({}, obj1); // Creates a new object with all key-value pairs from obj1
Object.freeze(obj1); // Freezes an object, preventing its properties from being modified but not added new ones
Object.seal(obj1); // Seals an object, preventing new properties from being added and existing ones from being modified
Object.create(obj1); // Creates a new object with the same prototype as obj1
Object.prototype.hasOwnProperty(); // Checks if a property is a direct property of the object (not inherited from its prototype)
Object.toString(); // Returns a string representation of the object
Object.isExtensible(); // Returns true if the object is extensible means more elements can be added, false otherwise
Object.isFrozen(); // Returns true if the object is frozen, false otherwise
Object.isSealed(); // Returns true if the object is sealed, false otherwise

// ---------- Quiz 1 : Dictionary ----------
let dict = {
  conflict: "Fights",
  revolution: "A forcible overthrow of a government",
  democracy: "Government by the people",
  monarchy: "Government ruled by a king or queen",
  republic: "A state where power is held by elected representatives",
};

let querySearch = "DeMOCracY".toLowerCase();

value = dict[querySearch];
console.log(value);
