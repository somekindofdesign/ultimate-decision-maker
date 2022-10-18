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
    if (computerChoice === 'Rock' && playerChoice === "Paper") {
      result = 'Rock covers paper - you lost';
      computerScore++
    }
    if (computerChoice === 'Rock' && playerChoice === "Scissors") {
      result = 'Rock crushes scissors - you lost';
      computerScore++
    }
    if (computerChoice === 'Rock' && playerChoice === "Lizard") {
      result = 'Rock crushes lizard - you lost';
      computerScore++
    }
    if (computerChoice === 'Rock' && playerChoice === "Spock") {
      result = 'Spock vaporizes rock - you win!';
      playerScore++
    }

    ///computer chooses paper
    if (computerChoice === 'Paper' && playerChoice === "Rock") {
      result = 'Paper covers rock - lost';
      computerScore++
    }
    if (computerChoice === 'Paper' && playerChoice === "Scissors") {
      result = 'Scissors cuts paper - you win!';
      playerScore++
    }
    if (computerChoice === 'Paper' && playerChoice === "Lizard") {
      result = 'Lizard eats paper - you win!';
      playerScore++
    }
    if (computerChoice === 'Paper' && playerChoice === "Spock") {
      result = 'Paper disproves Spock - you lost';
      computerScore++
    }

    ///computer chooses scissors
    if (computerChoice === 'Scissors' && playerChoice === "Rock") {
      result = 'Rock crushes scissors - you win!';
      playerScore++
    }
    if (computerChoice === 'Scissors' && playerChoice === "Paper") {
      result = 'Scissors cuts paper - you lost';
      computerScore++
    }
    if (computerChoice === 'Scissors' && playerChoice === "Lizard") {
      result = 'Scissors decapitates lizard - you lost';
      computerScore++
    }
    if (computerChoice === 'Scissors' && playerChoice === "Spock") {
      result = 'Spock smashes scissors - you win!';
      playerScore++
    }

    ///computer chooses lizard
    if (computerChoice === 'Lizard' && playerChoice === "Rock") {
      result = 'Rock crushes lizard - you win!';
      playerScore++
    }
    if (computerChoice === 'Lizard' && playerChoice === "Paper") {
      result = 'Lizard eats paper - you lost';
      computerScore++
    }
    if (computerChoice === 'Lizard' && playerChoice === "Scissors") {
      result = 'Scissors decapitates lizard - you win!';
      playerScore++
    }
    if (computerChoice === 'Lizard' && playerChoice === "Spock") {
      result = 'Lizard poisons Spock - you lost';
      computerScore++
    }

    ///computer chooses spock
    if (computerChoice === 'Spock' && playerChoice === "Rock") {
      result = 'Spock vaporizes rock - you lost';
      computerScore++
    }
    if (computerChoice === 'Spock' && playerChoice === "Paper") {
      result = 'Paper disproves Spock - you win!';
      playerScore++
    }
    if (computerChoice === 'Spock' && playerChoice === "Scissors") {
      result = 'Spock smashes scissors - you lost';
      computerScore++
    }
    if (computerChoice === 'Spock' && playerChoice === "Lizard") {
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