"use strict";

function rockPaperScissors() {
  const choices = ["Rock", "Paper", "Scissors"]; //rps array

  const playerIndex = Math.floor(Math.random() * 3); //choose random index
  const computerIndex = Math.floor(Math.random() * 3); //choose random index

  const playerChoice = choices[playerIndex]; //assigns random index to element within the array
  const computerChoice = choices[computerIndex];

  let result;

  //conditionals
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Rock" && computerChoice === "Scissors")
  ) {
    result = "You win!"; //if execute
  } else {
    result = "Computer wins";
  }

  //output
  console.log(`Player chose ${playerChoice}`);
  console.log(`Computer chose ${computerChoice}`);
  console.log(result);
};

rockPaperScissors();

