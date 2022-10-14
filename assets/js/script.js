const computerChoiceText = document.getElementById('computerChoice')
const playerChoiceText = document.getElementById('playerChoice')
const resultText = document.getElementById('result')
const allChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice

allChoices.forEach(aChoice => aChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceText.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
  }))

  function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    
    if (randomNumber === 1) {
      computerChoice = 'rock'
    }
    if (randomNumber === 2) {
      computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
      computerChoice = 'paper'
    }
    computerChoiceText.innerHTML = computerChoice
  }

  function getResult() {
    if (computerChoice === playerChoice) {
      result = 'Its a tie'
    }
    if (computerChoice === 'rock' && playerChoice === "paper") {
      result = 'You won this round'
    }
    if (computerChoice === 'rock' && playerChoice === "scissors") {
      result = 'You lost this round'
    }
    if (computerChoice === 'paper' && playerChoice === "scissors") {
      result = 'You won this round'
    }
    if (computerChoice === 'paper' && playerChoice === "rock") {
      result = 'You lost this round'
    }
    if (computerChoice === 'scissors' && playerChoice === "rock") {
      result = 'You won this round'
    }
    if (computerChoice === 'scissors' && playerChoice === "paper") {
      result = 'You lost this round'
    }
    resultText.innerHTML = result
  }