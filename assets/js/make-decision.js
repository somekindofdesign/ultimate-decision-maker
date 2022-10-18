///game play
const computerChoiceText = document.getElementById('computerChoice')
const playerChoiceText = document.getElementById('playerChoice')
const resultText = document.getElementById('result')
const allChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice
let result

///game score
let playerScore = 0;
let computerScore = 0;

///game play function
allChoices.forEach(aChoice => aChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerChoiceText.innerHTML = playerChoice;
    generateComputerChoice();
    getResult();
    updateScore();
  }))

  ///generate computer choice
  function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 5) + 1
    
    if (randomNumber === 1) {
      computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
      computerChoice = 'paper'
    }
    if (randomNumber === 3) {
      computerChoice = 'scissors'
    }
    if (randomNumber === 4) {
        computerChoice = 'lizard'
    }
    if (randomNumber === 5) {
        computerChoice = 'spock'
    }

    ///display computer choice
    computerChoiceText.innerHTML = computerChoice
  }


  ///compare choices, get result
  function getResult() {
    if (computerChoice === playerChoice) {
      result = "It's a tie!"
    }

    ///computer chooses paper
    if (computerChoice === 'rock' && playerChoice === "paper") {
      result = 'Rock covers paper - you lost';
      computerScore++
    }
    if (computerChoice === 'rock' && playerChoice === "scissors") {
      result = 'Rock crushes scissors - you lost';
      computerScore++
    }
    if (computerChoice === 'rock' && playerChoice === "lizard") {
      result = 'Rock crushes lizard - you lost';
      computerScore++
    }
    if (computerChoice === 'rock' && playerChoice === "spock") {
      result = 'Spock vaporizes rock - you win!';
      playerScore++
    }

    ///computer chooses paper
    if (computerChoice === 'paper' && playerChoice === "rock") {
      result = 'Paper covers rock - lost';
      computerScore++
    }
    if (computerChoice === 'paper' && playerChoice === "scissors") {
      result = 'Scissors cuts paper - you win!';
      playerScore++
    }
    if (computerChoice === 'paper' && playerChoice === "lizard") {
      result = 'Lizard eats paper - you win!';
      playerScore++
    }
    if (computerChoice === 'paper' && playerChoice === "spock") {
      result = 'Paper disproves Spock - you lost';
      computerScore++
    }

    ///computer chooses scissors
    if (computerChoice === 'scissors' && playerChoice === "rock") {
      result = 'Rock crushes scissors - you win!';
      playerScore++
    }
    if (computerChoice === 'scissors' && playerChoice === "paper") {
      result = 'Scissors cuts paper - you lost';
      computerScore++
    }
    if (computerChoice === 'scissors' && playerChoice === "lizard") {
      result = 'Scissors decapitates lizard - you lost';
      computerScore++
    }
    if (computerChoice === 'scissors' && playerChoice === "spock") {
      result = 'Spock smashes scissors - you win!';
      playerScore++
    }

    ///computer chooses lizard
    if (computerChoice === 'lizard' && playerChoice === "rock") {
      result = 'Rock crushes lizard - you win!';
      playerScore++
    }
    if (computerChoice === 'lizard' && playerChoice === "paper") {
      result = 'Lizard eats paper - you lost';
      computerScore++
    }
    if (computerChoice === 'lizard' && playerChoice === "scissors") {
      result = 'Scissors decapitates lizard - you win!';
      playerScore++
    }
    if (computerChoice === 'lizard' && playerChoice === "spock") {
      result = 'Lizard poisons Spock - you lost';
      computerScore++
    }

    ///computer chooses spock
    if (computerChoice === 'spock' && playerChoice === "rock") {
      result = 'Spock vaporizes rock - you lost';
      computerScore++
    }
    if (computerChoice === 'spock' && playerChoice === "paper") {
      result = 'Paper disproves Spock - you win!';
      playerScore++
    }
    if (computerChoice === 'spock' && playerChoice === "scissors") {
      result = 'Spock smashes scissors - you lost';
      computerScore++
    }
    if (computerChoice === 'spock' && playerChoice === "lizard") {
      result = 'Lizard poisons Spock - you win!';
      playerScore++
    }

    ///display result
    resultText.innerHTML = result
  
    ///update scores function
    function updateScore() {
      const playerScore = document.getElementById("playerScore");
      const computerScore = document.getElementById("computerScore");
  
      playerScore.innerHTML = `${playerScore}`;
      computerScore.innerHTML = `${computerScore}`;
  }

}