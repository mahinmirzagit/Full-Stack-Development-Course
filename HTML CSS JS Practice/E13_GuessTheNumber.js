let hiddenNum = Math.ceil(Math.random() * 10);
let userinp;
let chances = 5;

console.log("---------- Guess The Number Game ----------\n");
console.log(
  `You have only ${chances} in this game.\nGuess between 1 to 10\n\n`
);

while (chances > 0) {
  userinp = prompt("Guess : ");

  if (userinp == hiddenNum) {
    console.log(`\nYou guessed it right in ${chances} chances. Won!!`);
    break;
  } else if (userinp > hiddenNum) {
    console.log(
      `\nOops! Your guess is higher than the number.\nYou have ${chances} left.`
    );
    chances--;
  } else if (userinp < hiddenNum) {
    console.log(
      `\nOops! Your guess is lower than the number.\nYou have ${chances} left.`
    );
    chances--;
  } else {
    console.log("Invalid input. Please enter a number between 1 to 10");
    chances--;
  }
}

if (chances == 0) {
  console.log(`\nThe number is ${hiddenNum}. You lost!!`);
}
