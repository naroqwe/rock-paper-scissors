const buttons = document.querySelectorAll(".rps");
const scoreDiv = document.querySelector(".score");
const playerScoreTag = document.querySelector(".score-of-player");
const computerScoreTag = document.querySelector(".score-of-computer");
const whoWon = document.querySelector(".who-won");

let computer;
let computerScore = 0;

let player;
let playerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1);

  switch (choice) {
    case 1:
      // console.log("rock");
      computer = "rock";
      break;
    case 2:
      // console.log("paper");
      computer = "paper";
      break;
    case 3:
      // console.log("scissors");
      computer = "scissors";
      break;
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    getComputerChoice();
    getWinner();
  })
);

function getWinner() {
  if (player == computer) {
    whoWon.innerHTML = "Draw";
  } else if (player == "rock" && computer == "paper") {
    computerScore++;
    whoWon.innerHTML = "Point to computer";
    computerScoreTag.innerHTML = `Computer: ${computerScore}`;
    checkScore();
  } else if (player == "rock" && computer == "scissors") {
    playerScore++;
    whoWon.innerHTML = "Point to player";
    playerScoreTag.innerHTML = `Player: ${playerScore}`;
    checkScore();
  } else if (player == "paper" && computer == "scissors") {
    computerScore++;
    whoWon.innerHTML = "Point to computer";
    computerScoreTag.innerHTML = `Computer: ${computerScore}`;
    checkScore();
  } else if (player == "paper" && computer == "rock") {
    playerScore++;
    whoWon.innerHTML = "Point to player";
    playerScoreTag.innerHTML = `Player: ${playerScore}`;
    checkScore();
  } else if (player == "scissors" && computer == "rock") {
    computerScore++;
    whoWon.innerHTML = "Point to computer";
    computerScoreTag.innerHTML = `Computer: ${computerScore}`;
    checkScore();
  } else if (player == "scissors" && computer == "paper") {
    playerScore++;
    whoWon.innerHTML = "Point to player";
    playerScoreTag.innerHTML = `Player: ${playerScore}`;
    checkScore();
  }
}

function checkScore() {
  if (computerScore == 5) {
    alert("Computer won, game will restart now");
  } else if (playerScore == 5) {
    alert("Player won, game will restart now");
  }
}
