// ---------- Map Function ----------
// Map function is used to create a new array with the results of applying a provided function on every element in an array. It does not change the original array.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let a1 = arr.map((x) => {
  return x * x;
});

// ---------- Filter Function ----------
// Filter function is used to create a new array with all elements that pass the test implemented by the provided function. It does not change the original array.
let a2 = arr.filter((x) => {
  return x < 5;
});

// ---------- Reduce Function ----------
// Reduce function is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. It does not change the original array.
let a3 = arr.reduce((x, y) => {
  return x + y;
});

console.log(a3);


// ---------- Quiz 5: Map & Filter ----------
let arr1 = [23, 10, 45, 200, 45, 99, 40, 150];

let filteredarr = arr1.filter((e) => {
  return e % 2 == 0;
});
console.log(filteredarr);

let sqrArr = filteredarr.map((e) => {
    return e*e
});
console.log(sqrArr);


// ---------- Quiz 6: Factorial using Reduce ----------
let num = 5;
let arr2 = [];

for (let i = 2; i <= num + 1; i++) {
  arr2.push(i - 1);
}

let facarr2 = arr2.reduce((a, b) => {
  return a * b;
});

console.log(facarr2);