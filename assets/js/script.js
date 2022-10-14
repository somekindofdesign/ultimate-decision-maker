const computerChoiceText = document.getElementById('computerChoice')
const playerChoiceText = document.getElementById('playerChoice')
const resultText = document.getElementById('result')
const allChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice
let result

allChoices.forEach(aChoice => aChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceText.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
  }))

  function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 5)
    
    if (randomNumber === 1) {
      computerChoice = 'rock'
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
    computerChoiceText.innerHTML = computerChoice
  }

  function getResult() {
    if (computerChoice === playerChoice) {
      result = "It's a tie!"
    }
    if (computerChoice === 'rock' && playerChoice === "paper") {
      result = 'Rock covers paper - you won!'
    }
    if (computerChoice === 'rock' && playerChoice === "scissors") {
      result = 'Rock crushes scissors - you won!'
    }
    if (computerChoice === 'rock' && playerChoice === "lizard") {
        result = 'Rock crushes lizard - you won!'
    }
    if (computerChoice === 'rock' && playerChoice === "spock") {
        result = 'Spock vaporizes rock - you lost.'
    }
    if (computerChoice === 'paper' && playerChoice === "rock") {
      result = 'Paper covers rock - you won!'
    }
    if (computerChoice === 'paper' && playerChoice === "scissors") {
      result = 'Scissors cuts paper - you lost.'
    }
    if (computerChoice === 'paper' && playerChoice === "lizard") {
        result = 'Lizard eats paper - you lost.'
    }
    if (computerChoice === 'paper' && playerChoice === "spock") {
        result = 'Paper disproves Spock - you win!'
    }
    if (computerChoice === 'scissors' && playerChoice === "rock") {
      result = 'Rock crushes scissors - you lost.'
    }
    if (computerChoice === 'scissors' && playerChoice === "paper") {
      result = 'Scissors cuts paper - you won!'
    }
    if (computerChoice === 'scissors' && playerChoice === "lizard") {
        result = 'Scissors decapitates lizard - you won!'
    }
    if (computerChoice === 'scissors' && playerChoice === "spock") {
        result = 'Spock smashes scissors - you lost.'
    }
    if (computerChoice === 'lizard' && playerChoice === "rock") {
        result = 'Rock crushes lizard - you lost.'
    }
    if (computerChoice === 'lizard' && playerChoice === "paper") {
        result = 'Lizard eats paper - you won!'
    }
    if (computerChoice === 'lizard' && playerChoice === "scissors") {
        result = 'Scissors decapitates lizard - you won!'
    }
    if (computerChoice === 'lizard' && playerChoice === "spock") {
        result = 'Lizard poisons Spock - you won!'
    }
    if (computerChoice === 'spock' && playerChoice === "rock") {
        result = 'Spock vaporizes rock - you won!'
    }
    if (computerChoice === 'spock' && playerChoice === "paper") {
        result = 'Paper disproves Spock - you lost.'
    }
    if (computerChoice === 'spock' && playerChoice === "scissors") {
        result = 'Spock smashes scissors - you won!'
    }
    if (computerChoice === 'spock' && playerChoice === "lizard") {
        result = 'Lizard poisons Spock - you won!'
    }
    resultText.innerHTML = result
  }