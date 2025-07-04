// // The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

// let mirrorStr = (str) => {
//   let mirrored = str.split("").reverse().join("");
//   return str + " " + mirrored;
// };

// let str = "Hello";
// console.log(mirrorStr(str));

// ----------------------------
// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

// let passwordEntered = "Zayn13213";

// let passwordValidator = (password) => {
//   let hasLowercase = false;
//   let hasUppercase = false;
//   let hasDigit = false;
//   let length = password.length;
//   let errors = [];

//   if (password.includes(String().match(/[a-z]/))) {
//     hasLowercase = true;
//   } else {
//     errors.push("Password should have at least one lowercase letter");
//   }
//   if (password.includes(String().match(/[A-Z]/))) {
//     hasUppercase = true;
//   } else {
//     errors.push("Password should have at least one uppercase letter");
//   }
//   if (password.includes(String().match(/[0-9]/))) {
//     hasDigit = true;
//   } else {
//     errors.push("Password should have at least one digit");
//   }

//   if (length >= 8) {
//     return "Password is valid";
//   } else {
//     errors.push("Password should be at least 8 characters long");
//     return errors;
//   }
// };

// console.log(passwordValidator(passwordEntered));
