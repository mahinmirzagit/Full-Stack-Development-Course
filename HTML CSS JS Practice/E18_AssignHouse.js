// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let students = [
  "Haris Ali Khan",
  "Mahin Mirza",
  "Vivekanand",
  "Saleem Khan",
  "Zayn",
  "Ron",
  "Saif Ali Khan",
  "Sarif",
  "Dev",
  "Dilin Nair",
  "Aditya Prateek Singh Sisodia",
  "Ankit Singh Patiyal",
];

let houses = new Object();

for (const student in students) {
  const e = students[student].split(" ")[0];
  if (e.length <= 5) {
    houses[e] = "Gryffindor";
  } else if (e.length <= 8) {
    houses[e] = "Hufflepuff";
  } else if (e.length <= 12) {
    houses[e] = "Ravenclaw";
  } else {
    houses[e] = "Slytherin";
  }
}
console.log(houses);
