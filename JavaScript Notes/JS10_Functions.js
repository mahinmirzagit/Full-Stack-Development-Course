// ---------- Functions ----------
// A function in JS is a block of code that can be called multiple times from different parts of the program. It is defined with the keyword function and can take arguments, which are the values passed to the function when it is called.

let myname = "Mahin";
let age = 233;

function details(name, age) {
  return `Name : ${name}\nAge : ${age}`; //returning value
}

let a = details(myname, age); // calling the function with arguments (Function Invocation)
console.log(a);

// Default Parameter Values
function details2(name = "Unknown", age = "Undefined") {
  return `Name : ${name}\nAge : ${age}`;
}
let b = details2();
console.log(b);

// Variable as a Function (Arrow Function)
let details3 = (name, age) => {
  console.log(`Name : ${name}\nAge : ${age}`);
};
details3();

// OR (with default parameters)
const details4 = (name = "Unknown", age = "Undefined") => {
  console.log(`Name : ${name}\nAge : ${age}`);
};
details4();

//Anonymous Function (Without Function Name)
let object = {
  name: "Zayn",
  subject: function () {
    return `English, Science`;
  },
};
console.log(object.subject());

// ---------- Quiz 3 : Mean Function ----------

let meanfunc = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};

console.log(meanfunc(1,2,3,4,5));
