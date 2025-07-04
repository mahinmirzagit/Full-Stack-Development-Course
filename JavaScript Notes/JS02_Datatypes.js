// ---------- Data Types ----------
// Datatypes are used to define the type of data that a variable can hold.
/*
1. Primitive Datatypes (stack/fixed memory allocation/fast):
    - string
    - numbers
    - BigInt
    - boolean
    - null
    - undefined
    - symbol

2. Reference Datatypes (heap/dynamic memory allocation/slow)
    - arrays
    - object literals
    - functions
    - dates
*/

// Primitive Data Types

// String
let myname = "Mahin";
console.log("My name is ", +myname);
console.log("Data Type : ", typeof name);

// Number
let age = 16;
console.log("Age : ", +age);
console.log("Data Type : ", typeof age);

// BigInt
let salary = 999999999999999*9999999;
console.log("Salary : ", +salary);
console.log("Data Type : ", typeof age);

// Boolean
let gender = false;
console.log("Female : ", +gender);
console.log("Data Type : ", typeof gender);

// null
let nullvar = null;
console.log("Data Type : ", typeof nullvar);

// undefined
let undef = undefined; //OR var undef;
console.log("Data Type : ", typeof undef);

// Reference Data Types

//array
let myarray = [23, 4, 12, 65, 34];
console.log("Data Type : ", typeof myarray);

//objective literals/ Objects
let marks = {
  mahin: 65,
  zayn: 76,
  sahil: 96,
};
console.log(marks["mahin"]); //OR marks.mahin
console.log("Data Type : ", typeof marks);

//function
function nothing() {
  return "Hello";
}
console.log(nothing());
console.log("Data Type : ", typeof nothing);

//date
let date = new Date();
console.log(date);
console.log("Data Type : ", typeof date);
