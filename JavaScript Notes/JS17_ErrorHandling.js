// ---------- Error Handling ----------
// Error handling is a crucial aspect of any application. It helps to prevent the application from crashing and provides a better user experience. In this example, we will use try-catch blocks to handle potential errors.

// ----- throw Error -----

let a = "sd"; //prompt("Enter 1st number: ");
let b = 34; // prompt("Enter 2nd number: ");

if (isNaN(a) || isNaN(b)) {
  throw new Error("Invalid input. Please enter a number.");
}

let sum = Number(a) + Number(b); // This will forgive the error and gives NaN as result (if a or b is not a number)
console.log("Sum is ", sum);

// ----- try-catch block -----

let x = "sd"; // prompt("Enter 1st number: ");
let y = 23; // prompt("Enter 2nd number: ");
let sum2;

try {
  sum2 = parseInt(x) + parseInt(z); // This will throw an error because we are trying to add a number and a string together.
  console.log("Sum is ", sum2);
} catch (error) {
  console.log("Error Name: ", error.name);
  console.log("Error Message: ", error.message);
  console.log("Error Stack: ", error.stack);
}

// ----- try-catch block with finally -----
let p = "sd"; // prompt("Enter 1st number: ");
let q = 23; // prompt("Enter 2nd number: ");
let sum3;

try {
  sum2 = parseInt(p) + parseInt(q);
  console.log("Sum is ", sum3);
} catch (error) {
  console.log("Error: ", error.message);
} finally {
  // why finally?
  console.log("Finally Files closed"); // This will run regardless of whether an error occurred or not.(NOTE: if not in a function)
}
// in function
function myFunction() {
  try {
    console.log(34 + 23);
    return "Hello";
  } catch (error) {
    console.log("Error: ", error.message);
    return "Error";
  } finally {
    console.log("Finally Files closed");
  }
}
myFunction();
// NOTE : if we just close the files without using finally keyword, it will not run because after return statement, the function will end. and no lines will be executed after return statement. but if we use finally keyword, it will run regardless of whether an error occurred or not even after return keyword.
