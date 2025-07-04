console.log("---------- snake, water, gun Game ----------\n\n");
console.log("'s' for snake\n'w' for water\n'g' for gun\n\n");

let hum_points = 0;
let com_points = 0;
let choices = ["s", "w", "g"];
let chances = 8;

while (chances > 0) {
  let userinp = prompt("Choose : ").toLowerCase();
  let compinp = choices[Math.floor(Math.random() * choices.length)];

  if (userinp == "w") {
    userinp = "water";
  } else if (userinp == "s") {
    userinp = "snake";
  } else if (userinp == "g") {
    userinp = "gun";
  }
  if (compinp == "w") {
    compinp = "water";
  } else if (compinp == "s") {
    compinp = "snake";
  } else if (compinp == "g") {
    compinp = "gun";
  }

  if (userinp == compinp) {
    console.log(`You Chosen : ${userinp}\nBot Chosen : ${compinp}\n\nTie!\n\n`);
  } else if (userinp == "snake" && compinp == "water") {
    hum_points++;
    console.log(
      `You Chosen : ${userinp}\nBot Chosen : ${compinp}\n\nHuman Wins a Point!\n\n`
    );
  } else if (userinp == "snake" && compinp == "gun") {
    com_points++;
    console.log(
      `You Chosen : ${userinp}\nBot Chosen : ${compinp}\n\nBot Wins a Point!\n\n`
    );
  } else if (userinp == "water" && compinp == "gun") {
    hum_points++;
    console.log(
      `You Chosen : ${userinp}\nBot Chosen : ${compinp}\n\nHuman Wins a Point!\n\n`
    );
  } else if (userinp == "water" && compinp == "snake") {
    com_points++;
    console.log(
      `You Chosen : ${userinp}\nBot Chosen : ${compinp}\n\nBot Wins a Point!\n\n`
    );
  } else if (userinp == "gun" && compinp == "snake") {
    hum_points++;
    console.log(
      `You Chosen : ${userinp}\nBot Chosen : ${compinp}\n\nHuman Wins a Point!\n\n`
    );
  } else if (userinp == "gun" && compinp == "water") {
    com_points++;
    console.log(
      `You Chosen : ${userinp}\nBot Chosen : ${compinp}\n\nBot Wins a Point!\n\n`
    );
  } else {
    console.log("Invalid Input...!\n\n");
  }
  chances--;
}

if (com_points > hum_points) {
  console.log(
    `You Lost The Game:(\nBot Won...!\n\nYour Points : ${hum_points}\nBot Points : ${com_points}`
  );
} else if (com_points == hum_points) {
  console.log(
    `Tie :|\n\nYour Points : ${hum_points}\nBot Points : ${com_points}`
  );
} else {
  console.log(
    `You Won The Game:)\nBot Lost...!\n\nYour Points : ${hum_points}\nBot Points : ${com_points}`
  );
}
