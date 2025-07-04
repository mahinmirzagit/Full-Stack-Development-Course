console.log("---------- Factorial ----------\n");
console.log("Using for loop : ");

let num = 4;
let fac = 1;

for (let i = 1; i <= num; i++) {
  fac *= i;
}
console.log(`Factorial of ${num} is ${fac} (Using for loop)`);

// -------------------

console.log("\nUsing reduce method : ");

let num2 = 5;
let arr1 = [];

for (let i = 1; i <= num + 1; i++) {
  arr1.push(i);
}

let newval = arr1.reduce((a, b) => {
  return a * b;
});
console.log(`Factorial of ${num2} is ${newval} (Using reduce method)`);

// -------------------

console.log("\nUsing recursion : ");

let num3 = 6;
let func = (n) => {
  if (n == 0) {
    return 1;
  } else {
    return n * func(n - 1);
  }
};
console.log(`Factorial of ${num3} is ${func(num3)} (Using recursion method)`);
