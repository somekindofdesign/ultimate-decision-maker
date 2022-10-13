 /**
 * Code Institute Rock Paper Scissors Spock Example Game
 */

const buttons = document.getElementsByClassName("control");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const messages = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

function playGame(playerChoice) {

    let computerChoice = Math.floor(Math.random() * 3);

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);

    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
          return "You win this round";
      } else {
          if (computerChoice === "scissors") {
              return "You lost this round";
          }
      }
      if (playerChoice === "scissors") {
          if (computerChoice === "rock") {
              return "You lost this round";
          } else {
              if (computerChoice === "paper") {
                  return "You win this round";
              }
          }
      }
  }

}