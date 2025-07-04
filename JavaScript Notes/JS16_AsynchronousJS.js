// ---------- Asynchronous JS ----------
// Asynchronous actions are the actions that are performed in the background, without blocking the main thread of the application. They are used to perform long-running tasks, such as making API calls, reading files, or performing database operations. like setTimeout() and setInterval() functions.
// Synchronous actions are the actions that are performed in the main thread of the application, and they block the main thread until the action is completed. They are used to perform short-running tasks, such as variable assignments. like console.log() function.

// ---------- Callbacks ----------
// A callback is a function that is passed as an argument to another function, and is executed when the first function has completed its execution. It is used to handle the result of an asynchronous action, such as an API call or a file read operation.
// function add(a, b, callback) {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//     console.log("World");
//   }, 2000);
// }
// let callbackfunc = () => {
//   return console.log("Callback function executed");
// };
// console.log("Hello");
// add(23, 34, callbackfunc);

// Pyramid Doom in JS callbacks is a common problem in JavaScript, where a function is called recursively, and the function calls itself with a new set of parameters, until it reaches a base case, at which point it stops calling itself. This can lead to a stack overflow error if not handled properly. The "pyramid" / "callback hell" of these recusive calls grows towards the right with every asynchronous action. As callback becomes more nested, it becomes harder to read and maintain. This is known as the "callback hell" problem. Here is an example of a recursive function that calculates the factorial of a number using callbacks:
// function factorial(n, callback) {
//   if (n === 0) {
//     callback(1);
//   } else {
//     factorial(n - 1, (result) => callback(n * result));
//   }
// }
// let callbackfunc2 = () => {
//   return console.log("Factorial function executed");
// };

// factorial(5, callbackfunc2);

// ---------- Promises ----------
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It is used to handle the result of an asynchronous action, such as an API call or a file read operation. Promises are a more modern and efficient way to handle asynchronous actions than callbacks. They are used to chain multiple asynchronous actions together, and to handle errors in a more elegant way. Here is an example of a promise

// function add(a, b) {
//   // synchronous function
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const result = a + b;
//       resolve(result);
//     }, 2000);
//   });
// }
// add(23, 34)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(() => {
//     console.log("Error");
//   });

// the above function adds 23 and 34 and returns a promise that resolves to the result after 2 seconds. Then it logs the result to the console. The then() method is used to handle the result of the promise. If the promise is resolved, the then() method is executed with the result as an argument . If the promise is rejected, the catch() method is executed with the error as an argument.

// .then() and .catch()

// let prom1 = new Promise((resolve, reject) => {
//   let r = Math.random();
//   if (r > 0.5) {
//     resolve("resolved");
//   } else {
//     reject("rejected");
//   }
// });

// prom1
//   .then((result) => {
//     // if the promise is resolved, this function is executed
//     console.log(result);
//   })
//   .catch((err) => {
//     // if the promise is rejected, this function is executed
//     console.log("Number less than 0.5, ", err);
//   });

// // Chain of .then() - Using above function
// prom1
//   .then((a) => {
//     console.log(a);
//   })
//   .then((b) => {
//     console.log(b);
//   })
//   .then((c) => {
//     console.log(c);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Multiple .then() handlers - Using above function
// all are independent
// prom1.then((a) => {
//   console.log(a);
// });
// prom1.then((b) => {
//   console.log(b);
// });
// prom1.then((c) => {
//   console.log(c);
// });

// .finally() - Using above function
// .finally() is used to execute a function regardless of the promise's outcome
// prom1
//   .then((a) => console.log(a)) // if the promise is resolved, this function is executed
//   .catch((err) => console.log(err)) // if the promise is rejected, this function is executed
//   .finally(() => console.log("Finally")); // this function is executed regardless of the promise's outcome

// Promise Methods
// .then() - Used to execute a function when the promise is resolved
// .catch() - Used to execute a function when the promise is rejected
// .finally() - Used to execute a function regardless of the promise's outcome
// .all() - Used to execute an array of promises. If any one of the promises is rejected, it will reject all the promises and gives the error
// .allSettled() - Waits for all the promises to settle and returns an array of their results with value/reason
// .race() - Used to execute an array of promises. It will return the first promise that is resolved or rejected
// .any() - Waits for the first promise to fulfill (not rejected) and returns its value. If all promises are rejected, it will reject with the aggregate error
// .resolve(value) - Used to resolve a promise with a value
// .reject(reason) - Used to reject a promise with a reason
let r1 = Math.random();
let r2 = Math.random();

let p1 = new Promise((resolve, reject) => {
  if (r1 > 0.5) {
    resolve("It is Resolved");
  } else {
    reject("It is Rejected");
  }
});
let p2 = new Promise((resolve, reject) => {
  if (r2 > 0.5) {
    resolve("It is Resolved");
  } else {
    reject("It is Rejected");
  }
});

p1.then((a) => {
  console.log(a);
}).catch((e) => {
  console.log(e);
});
p2.then((b) => {
  console.log(b);
}).catch((f) => {
  console.log(f);
});

// let newp1 = Promise.all([p1, p2]);
// newp1
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err1) => {
//     console.log(err1);
//   });

// let newp2 = Promise.allSettled([p1, p2]);
// newp2
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err2) => {
//     console.log(err2);
//   });

// let newp3 = Promise.race([p1, p2]);
// newp3
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err3) => {
//     console.log(err3);
//   });

// let newp4 = Promise.any([p1, p2]);
// newp4
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err4) => {
//     console.log(err4);
//   });

// let newp5 = Promise.resolve([p1, p2]);
// newp5
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err5) => {
//     console.log(err5);
//   });

// let newp6 = Promise.reject([p1, p2]);
// newp6
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err6) => {
//     console.log(err6);
//   });

// ---------- Async and Await ----------

async function getData() {
  // Simulate getting data from a server
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3500);
  });
}

async function getData() {
  // Simulate getting data from a server
  // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await x.json();
  return data;
}

async function main() {
  console.log("Loading modules");
  console.log("Do something else");
  console.log("Load data");

  let data = await getData();

  console.log(data);
  console.log("process data");
  console.log("task 2");
}

main();

// Use async/await to handle promises instead of this
// data.then((v) => {
//   console.log(v);
//   console.log("process data");
//   console.log("task 2");
// });
