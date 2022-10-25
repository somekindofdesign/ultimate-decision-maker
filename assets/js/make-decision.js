/* The following sources were used for general guidance and as part of the debugging process for this game:
Game Play: https://betterprogramming.pub/7-ways-to-code-rock-paper-scissors-in-javascript-4189a5e7e535 and https://javascript.plainenglish.io/building-a-rock-paper-scissors-game-with-javascript-bce23d39509d
Game Score: https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/
General: https://www.w3schools.com/js/default.asp and https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/234519d86b76411aa181e76a55dabe70/
*/

///game play
const computerChoiceText = document.getElementById('computerChoice');
const playerChoiceText = document.getElementById('playerChoice');
const resultText = document.getElementById('result');
const allChoices = document.querySelectorAll('button');
let playerChoice;
let computerChoice;
let result;

///game score
let playerScore = 0;
let computerScore = 0;

///game play function
allChoices.forEach(aChoice => aChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerChoiceText.innerHTML = "You played "+playerChoice;
    generateComputerChoice();
    getResult();
  }));

  ///generate computer choice
  function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    
    if (randomNumber === 1) {
      computerChoice = 'rock';
    }
    if (randomNumber === 2) {
      computerChoice = 'paper';
    }
    if (randomNumber === 3) {
      computerChoice = 'scissors';
    }
    if (randomNumber === 4) {
        computerChoice = 'lizard';
    }
    if (randomNumber === 5) {
        computerChoice = 'spock';
    }

    ///display computer choice
    computerChoiceText.innerHTML = "Opponent played "+computerChoice;
  }


  ///compare choices and get result
  function getResult() {
    const playerScoreUpdate = document.querySelector('.player');
    const computerScoreUpdate = document.querySelector('.computer');

    //computer and player choose the same
    if (computerChoice === playerChoice) {
      result = "It's a tie!";
    }

    ///computer chooses paper
    if (computerChoice === 'rock' && playerChoice === "paper") {
      result = 'Rock covers paper - you lost this round';
      computerScore++;
      computerScoreUpdate.textContent = computerScore;
    }
    if (computerChoice === 'rock' && playerChoice === "scissors") {
      result = 'Rock crushes scissors - you lost this round';
      computerScore++;
      computerScoreUpdate.textContent = computerScore;
    }
    if (computerChoice === 'rock' && playerChoice === "lizard") {
      result = 'Rock crushes lizard - you lost this round';
      computerScore++;
      computerScoreUpdate.textContent = computerScore;
    }
    if (computerChoice === 'rock' && playerChoice === "spock") {
      result = 'Spock vaporizes rock - you win this round';
      playerScore++;
      playerScoreUpdate.textContent = playerScore;
    }

    ///computer chooses paper
    if (computerChoice === 'paper' && playerChoice === "rock") {
      result = 'Paper covers rock - lost this round';
      computerScore++;
      computerScoreUpdate.textContent = computerScore;
    }
    if (computerChoice === 'paper' && playerChoice === "scissors") {
      result = 'Scissors cuts paper - you win this round';
      playerScore++;
      playerScoreUpdate.textContent = playerScore;
    }
    if (computerChoice === 'paper' && playerChoice === "lizard") {
      result = 'Lizard eats paper - you win this round';
      playerScore++;
      playerScoreUpdate.textContent = playerScore;
    }
    if (computerChoice === 'paper' && playerChoice === "spock") {
      result = 'Paper disproves Spock - you lost this round';
      computerScore++;
      computerScoreUpdate.textContent = computerScore;
    }

    ///computer chooses scissors
    if (computerChoice === 'scissors' && playerChoice === "rock") {
      result = 'Rock crushes scissors - you win this round!';
      playerScore++;
      playerScoreUpdate.textContent = playerScore;
    }
    if (computerChoice === 'scissors' && playerChoice === "paper") {
      result = 'Scissors cuts paper - you lost this round';
      computerScore++;
      computerScoreUpdate.textContent = computerScore;
    }
    if (computerChoice === 'scissors' && playerChoice === "lizard") {
      result = 'Scissors decapitates lizard - you lost this round';
      computerScore++;
      computerScoreUpdate.textContent = computerScore;
    }
    if (computerChoice === 'scissors' && playerChoice === "spock") {
      result = 'Spock smashes scissors - you win this round!';
      playerScore++;
      playerScoreUpdate.textContent = playerScore;
    }

    ///computer chooses lizard
    if (computerChoice === 'lizard' && playerChoice === "rock") {
      result = 'Rock crushes lizard - you win this round';
      playerScore++;
      playerScoreUpdate.textContent = playerScore;
    }
    if (computerChoice === 'lizard' && playerChoice === "paper") {
      result = 'Lizard eats paper - you lost this round';
      computerScore++;
      computerScoreUpdate.textContent = computerScore;
    }
    if (computerChoice === 'lizard' && playerChoice === "scissors") {
      result = 'Scissors decapitates lizard - you win this round';
      playerScore++;
      playerScoreUpdate.textContent = playerScore;
    }
    if (computerChoice === 'lizard' && playerChoice === "spock") {
      result = 'Lizard poisons Spock - you lost this round';
      computerScore++;
      computerScoreUpdate.textContent = computerScore;
    }

    ///computer chooses spock
    if (computerChoice === 'spock' && playerChoice === "rock") {
      result = 'Spock vaporizes rock - you lost this round';
      computerScore++;
      computerScoreUpdate.textContent = computerScore;
    }
    if (computerChoice === 'spock' && playerChoice === "paper") {
      result = 'Paper disproves Spock - you win this round';
      playerScore++;
      playerScoreUpdate.textContent = playerScore;
    }
    if (computerChoice === 'spock' && playerChoice === "scissors") {
      result = 'Spock smashes scissors - you lost this round';
      computerScore++;
      computerScoreUpdate.textContent = computerScore;
    }
    if (computerChoice === 'spock' && playerChoice === "lizard") {
      result = 'Lizard poisons Spock - you win this round';
      playerScore++;
      playerScoreUpdate.textContent = playerScore;
    }

    ///display result
    resultText.innerHTML = result;

}