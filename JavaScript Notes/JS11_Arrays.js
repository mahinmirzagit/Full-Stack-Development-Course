// ---------- Arrays ----------
// Arrays are a collection of elements of the same data type stored in contiguous memory locations. They are useful when you need to store a fixed-size collection of data. They are mutable.
// NOTE : Note that while arrays are mutable, assigning a new value to an array variable or applying most of the methods on it, does not change the original array. We have to store that array in different variable to see the changes.

const array = [34, 78, 90, 23, 56]; //OR empty array can be created by []
// OR
const array2 = new Array("mahin", 76, 23, false, Object, [
  45,
  67,
  23,
  [67, 45],
  120,
]); // Can be created by a constructor

array[1] = 99; // Accessing element and changing the value
delete array[2]; // Removes the element at the specified index. NOTE: Memory location will be retained
let l = array.length; // Returns the number of elements in the array
let result = Array.isArray(array); // Checks if the given variable is an array
let newarr = Array.from("Zayn"); // Creates an array from an iterable
console.log(array, l);

// Methods
array.concat(array2); // Joins arrays and returns a new array with the joined arrays
array.toString(); // Converts an array to a string
array.join("_"); // Joins all elements of an array into a string
array.unshift(87); // Adds new elements to the beginning of an array, and returns the new length
array.push(32); // Adds new elements to the end of an array, and returns the new length
array.pop(); // Removes the last element of an array, and returns that element
array.shift(); // Removes the first element of an array, and returns that element
array.sort(); // Sorts the elements of an array. NOTE: It sorts in-place, meaning it changes the original array. Also we can specify a compare function to sort the array based on a custom criteria.
array.splice(2, 1, "a", "b"); // Remove 1 element at index 2 and add 'a' and 'b'
array.slice(0, 2); // Selects a subset of an array and returns the new array
array.reverse(); //Reverses the order of the elements in an array by changing original array. Also returns reversed array
array.indexOf(90); // Search the array for an element and returns its first occurence
array.lastIndexOf(23); // Search the array for an element and returns its last occurence
array.includes(564); // Check if an array contains the specified element
array.copyWithin(66); // Copies array elements within the array, to and from specified positions
array.fill(0, 2, 4); // Fill/replace elements with 0 from index 2 to 4
array2.flat(2); // Flattens a nested array, i.e., an array whose elements are also arrays , into a one-dimensional array. The depth level can be specified with the depth parameter. Default is 1.
array.flatMap((x) => [x, x * 2]); // Output: [34, 68, 78, 156, 90, 180, 23 , 46, 56, 112]
array.every((x) => {x > 40;}); // Returns true if all elements in the array pass the test implemented by the provided function.
array.some((x) => {x > 40;}); // Returns true if at least one element in the array passes the test implemented by the provided function.
array.findIndex((x) => {x > 40;}); // Finds the index of the first element in the array that satisfies the provided testing function.
array.find((x) => {x > 40;}); // Finds the first element in the array that satisfies the provided testing function.
array.keys() // Returns an Array Iterator object with the keys of the array.
array.values() // Returns an Array Iterator object with the values of the array.
array.entries() // Returns an Array Iterator object with key-value pairs of the array.

// ---------- Quiz 4 : Prompt until zero ----------
let arr = [];
let running = 1;

while (running) {
  let inp = parseInt(prompt("Enter Number"));
  if (inp !== 0) {
    arr.push(inp);
  } else {
    running = 0;
  }
}
console.log(arr);
