function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);

  //1 rock 2 scissors 3 paper
  if (choice === 1) {
    let computerRock = "rock";
    console.log(computerRock);
  } else if (choice === 2) {
    computerScissors = "scissors";
    console.log(computerScissors);
  } else if (choice === 3) {
    let computerPaper = "paper";
    console.log(computerPaper);
  }
}

let playerSelection = prompt("Pick rock, scissors, paper");

console.log(playerSelection);
