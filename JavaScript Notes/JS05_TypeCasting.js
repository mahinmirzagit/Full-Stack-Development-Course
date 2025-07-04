// ---------- Conversion ----------
/*
Some possible conversions:
    - string -> number (string must be a integer)
    - number -> string
    - number -> boolean (number must be 1 or 0)
    - boolean -> number (boolean must be true or false)
    - string -> boolean (string must be true or false)
    - boolean -> string (boolean must be true or false)
*/

// Examples
let num = 23;
num.toString(); // OR num = String(num)
console.log(typeof num, num);

let str = "fafef123";
str = Number(str); // OR str = parseInt(str) OR str = parseFloat(str)
console.log(typeof str, str); //gives NaN (not a number)

let num1 = 244;
num1 = BigInt(num1);

let num2 = parseInt(32.5); //convert into a integer by removing zeroes after decimal
console.log(num2.toFixed(9)); // print the number of digits after decimal

//And More...
