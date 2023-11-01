// Randomly returns either 'rock', 'paper' or 'scissors
function getComputerChoice() {
  // Get a random number from 0 to 2
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection.toLowerCase()) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          return "Tie!";
        case "paper":
          return "You lose! Paper beats Rock!";
        case "scissors":
          return "You win! Rock beats Scissors!";
      }
    case "paper":
      switch (computerSelection) {
        case "rock":
          return "You win! Paper beats Rock!";
        case "paper":
          return "Tie!";
        case "scissors":
          return "You lose! Scissors beat Paper!";
      }
    case "scissors":
      switch (computerSelection) {
        case "rock":
          return "You lose! Rock beats Scissors!";
        case "paper":
          return "You win! Scissors beats Paper!";
        case "scissors":
          return "Tie!";
      }
  }
}

function game() {
  for (let i = 0; i < 5; ++i) {
    console.log(playRound(prompt("Rock, Paper or Scissors?"), getComputerChoice()));
  }
}

game();