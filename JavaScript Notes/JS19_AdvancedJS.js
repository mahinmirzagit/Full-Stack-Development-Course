// ---------- IIFE - Immediately Invoked Function Expression ----------
// It is a function that is defined and executed immediately when it is parsed. It is used to encapsulate variables and functions to prevent them from being accessed directly from the global scope.
// It is also known as a self-executing anonymous function or a function literal.

(function greet(name) {
  console.log("Hello, World!", name);
})("mahin");

// ---------- Destructuring Assignment ----------
// It is a feature in JavaScript that allows you to extract values from arrays or objects and assign them to variables in a concise way. It is a shorthand way of assigning values to variables from arrays or objects.
const person = {
  myname: "Mahin",
  age: 25,
};

const { myname, age, salary } = person; // salary is not defined in the person object, so it will be undefined
console.log(myname, age, salary); // Output: Mahin 25 undefined

// rest operator
const numbers = [12, 34, 23, 13, 23, 221, 23];
const [first, second, ...rest] = numbers; // ... is called rest operator, it collects all the remaining elements in an array. rest can be named anything
console.log(first, second, rest); // Output: 12 34 [ 23, 13, 23, 221, 23 ]

// ---------- Spread Operator ----------
// It is a feature in JavaScript that allows you to expand an array or object into a function call or into an array. It is denoted by three dots (...) and is used to unpack values from an array or object. It is the opposite of the rest operator.
const numbers2 = [12, 34, 23, 13, 23, 221, 23];
const newNumbers = [...numbers2, 100, 200, 300];

console.log(newNumbers);
console.log(...numbers2);
console.log(23 in [...numbers2]);

// ---------- Hoisting in JavaScript ----------
// Hoisting is a JavaScript mechanism where variables and functions are moved to the top of their scope before the code is executed. This means that even if you declare a variable or function after it is used , it will still work because it has been moved to the top of the scope. However, the assignment of a variable is not hoisted, only the declaration is. For example:
console.log(x); // Output: undefined
var x = 10; // This is a variable declaration and assignment, but the assignment is not hoisted, so x is undefined when console.log(x) is executed.
// The same applies to functions, function declarations are hoisted, but function expressions are not. For example:
console.log(addus(5, 10)); // Output: 15
function addus(a, b) {
  return a + b;
} // This is a function declaration, so it is hoisted.
// The following is a function expression, so it is not hoisted.
var addus = function (a, b) {
  return a + b;
};

// ---------- Closures in JavaScript ----------
// A closure is a function that has access to its outer scope, even when the outer function has returned. This means that a closure can remember its outer scope and use its variables, even when the outer function has finished executing. For example:
function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  return inner;
}
outer()(); // Output: 10
// In the above example, the inner function has access to the outer function's scope, even after the outer function has returned. This is an example of a closure.

// ---------- Higher-Order Functions in JavaScript ----------
// A higher-order function is a function that takes another function as an argument or returns a function as a result. For example:
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function higherOrderFunction(func, a, b) {
  return func(a, b);
}
console.log(higherOrderFunction(add, 5, 10)); // Output: 15
console.log(higherOrderFunction(multiply, 5, 10)); // Output: 50