// ---------- if-else Conditions ----------
// if-else conditions are used to execute different blocks of code based on a condition. The condition is a boolean expression that evaluates to true or false.

const age = 23;
const doesdrive = false;

if (age <= 18 && age >= 5) {
  console.log(`You cannot drive...\nYour age is ${age}`);
} else if (age >= 18 && age <= 90) {
  console.log(`You can drive...\nYour age is ${age}`);
} else {
  console.log("Please Enter a Valid Input!!");
}

// Checks if value exist
var variable;

if (typeof variable !== "undefined") {
  console.log(`Variable is defined and its value is ${variable}`);
} else {
  console.log(`Variable is not defined`);
}

// With boolean
if (!doesdrive && age < 20) {
  console.log("You cannot drive");
} else {
  console.log("You cannot drive");
}

// Short-hand if-else (with ternary operator)
let age2 = 40;
result = age2 < 18 ? "Under-Age" : "Adult";
console.log(result);

// Short-hand if-else (with ternary operator) but multiple conditions
let age3 = 23;

console.log(
  age3 <= 18 && age3 > 4
    ? "You cannot drive!"
    : age3 > 18 && age3 < 85
    ? "You can drive!"
    : "Invalid Input!!"
);

// ---------- Switch Case Statements ----------
// switch-case statements are used to execute different blocks of code based on the value of a variable.
var candrive = "yes";

switch (candrive) {
  case "yes":
    console.log(`You entered ${candrive}`);
    break;
  case "no":
    console.log(`You entered ${candrive}`);
    break;
  default:
    console.log("Error");
}
