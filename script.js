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
          return { winner: 0, explanation: "Everyone chose Rock!" };
        case "paper":
          return { winner: 2, explanation: "Paper beats Rock!" };
        case "scissors":
          return { winner: 1, explanation: "Rock beats Scissors!" };
      }
    case "paper":
      switch (computerSelection) {
        case "rock":
          return { winner: 1, explanation: "Paper beats Rock!" };
        case "paper":
          return { winner: 0, explanation: "Everyone chose Paper!" };
        case "scissors":
          return { winner: 2, explanation: "Scissors beat Paper!" };
      }
    case "scissors":
      switch (computerSelection) {
        case "rock":
          return { winner: 2, explanation: "rock", looserChoice: "scissors" };
        case "paper":
          return { winner: 1, explanation: "Scissors beat Paper!" };
        case "scissors":
          return { winner: 0, explanation: "Everyone chose Scissors!" };
      }
  }
}

const buttonContainer = document.querySelector(".button-container");
const resultsContainer = document.querySelector(".results");
const finalResult = document.createElement("p");

let computerScore = 0;
let playerScore = 0;

function game(e) {
  let roundResults = playRound(e.target.className, getComputerChoice());
  let resultsParagraph = document.createElement("p");
  resultsParagraph.textContent =
    (roundResults.winner == 0
      ? "Tie! "
      : roundResults.winner == 1
      ? (++playerScore, "You won the round! ")
      : (++computerScore, "You lost the round! ")) + roundResults.explanation;
  resultsContainer.append(resultsParagraph);
  if (computerScore == 5 || playerScore == 5) {
    finalResult.textContent = computerScore > playerScore ? "THE COMPUTER WON." : "YOU WON!";
    resultsContainer.append(finalResult);
    buttonContainer.removeEventListener("click", game);
  }
}

buttonContainer.addEventListener("click", game);