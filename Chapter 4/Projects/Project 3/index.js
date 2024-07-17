"use strict";

function rockPaperScissors() {
  const choices = ["Rock", "Paper", "Scissors"];

  const playerIndex = Math.floor(Math.random() * 3);
  const computerIndex = Math.floor(Math.random() * 3);

  const playerChoice = choices[playerIndex];
  const computerChoice = choices[computerIndex];

  let result;

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = "You win!"; //if execute
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    result = "No one wins (execption)";
  } else {
    result = "Computer wins";
  }

  console.log(`Player chose ${playerChoice}`);
  console.log(`Computer chose ${computerChoice}`);
  console.log(result);
};

rockPaperScissors();

