// ---------- for Loops ----------
// A for loop is used to execute a block of code repeatedly for a specified number of times. It is similar to a while loop, but it is more concise and easier to read. The basic syntax of a for loop is as follows: for (initialization; condition; increment) {}

for (let x = 1; x <= 10; x++) {
  if (x == 3) {
    continue; // Back to the start of the loop skipping this iteration
  } else if (x == 9) {
    break; // Stop the loop
  } else {
    console.log(x);
  }
}

// ---------- for in Loops ----------
// A for in loop is used to iterate over the properties of an object. NOTE: Can also be used with arrays, but it's generally not recommended.
let person = {
  name: "Udit Sharma Star",
  age: 1500,
  type: "Chapri",
};

for (let key in person) {
  console.log(`${key} : ${person[key]}`);
}

// ---------- for of Loops ----------
// A for of loop is used to iterate over the values of an array or an iterable. Not for object keys
let array1 = [20, 30, 42, 43, 65];

for (item of array1) {
  console.log(item);
}

// ---------- forEach Loops ----------
// The forEach() method calls a function once for each element in an array.
let array = [23, 54, 65, 76];

array.forEach(function (element, index) {
  console.log(element, `Index : ${index}`);
});

// OR
array.forEach((e) => {
  console.log(e);
});

// We can print element, index and the array at the same time using foreach()
array.forEach((element, index, array_) => {
  console.log(element, index, array_);
});

// ---------- while Loop ----------
// A while loop will continue to execute as long as the given condition is true or 'break' is used.
let y = 1;
while (y <= 10) {
  if (y == 7) {
    break;
  }
  console.log(y);
  y++;
}

// ---------- do-while Loop -----------
// A do-while loop will execute the code inside the loop at least once, and then continue to execute as long as the given condition is true or 'break' is used.

let z = 100;
do {
  console.log(z);
  z++;
} while (z < 10);

// ---------- Quiz 2 : Print Marks ----------
//using for loop
let marks = {
  mahin: 67,
  zayn: 23,
  udit: 45,
};
let a = Object.keys(marks);
console.log(a);

for (let i = 0; i < a.length; i++) {
  console.log(`${a[i]}: ${marks[a[i]]}`);
}
