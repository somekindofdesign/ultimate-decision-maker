/**
 * Code Institute Rock Paper Scissors Spock Example Game
 */

const buttons = documents.getElementByClassName("control");
const playerScore = documents.getElementById("player-score");
const computerScore = documents.getElementById("computer-score");
const playerImage = documents.getElementById("player-image");
const computerImage = documents.getElementById("computer-image");
const messages = documents.getElementById("messages");
const choices = ["rock", "paper", "scissors"];

for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = getAttribute("data-choice");
        playerGame(playerChoice);
    });
}

function playGame(playerChoice) {

    playerImage.src = `assets/images/{$choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    computerImage.src = `assets/images/{$choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);

}

if (computerChoice === playerChoice) {
    result = false;
  } else if (computerChoice > playerChoice) {
    result = false;
  } else {
    result = true;
  }
